
import axios from 'axios';
import styled from '@emotion/styled';
import moment from 'moment';
import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import S from  '../../formStyles.js';
import BridgeWebAPI from '../../helpers/api.js';

const BoxItemStyled = styled.div`
    color: black;
    border-radius: 4px;
    box-shadow: 2px 4px #898989;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    p{
        font-size: 12px;
    }
`;

const ComponentRowStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p{

        font-size: 12px;
    }
`;



class MeetingPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeMeetingTemplate: null,
          meetingUUID:null,
        }
      }


    componentDidMount(){
        const { token, match } = this.props;
        
        const {  params : { meetingID }} = match;
        BridgeWebAPI.request(({
          headers: { Authorization: `JWT ${token}`},
          url: `${API_URL}/meetings/active/preview/`,
          method: 'GET',
          params: {
              meeting_uuid: meetingID
          }
        })).then(({data}) => {
            const { meeting } = data;
            const { meeting_template : meetingTemplate } = meeting;
            this.setState({ activeMeetingTemplate: meetingTemplate, meetingUUID: meeting.meeting_uuid})
        })
        .catch((error) => {
            console.log(error);
        });
    }
    

    render(){
        const { activeMeetingTemplate, meetingUUID } = this.state;
        const { history } = this.props;
        return(
        <Fragment>
            {
                activeMeetingTemplate && (
                  <Fragment>
                    <BoxItemStyled>
                    
                    <h2>{`${activeMeetingTemplate.name}`}</h2>
                    <h3>{`${activeMeetingTemplate.description}`}</h3>
                    { activeMeetingTemplate.components.length > 0 && (
                      activeMeetingTemplate.components.map( (component) => (
                        <ComponentRowStyled>
                        <p>{component.agenda_item}</p>
                        <p>{component.name}</p>
                        <p>{component.duration}</p>
                        </ComponentRowStyled>
                      )

                      )
                    )

                    }
                    </BoxItemStyled>
                    <S.ButtonElement onClick={ () => history.push(`/meeting/activity/${meetingUUID}/brainstorm/`)}> Start PreWork </S.ButtonElement>
                  </Fragment>
                )

            }
        </Fragment>

        )

    }


}


const mapStateToProps = ({
    reducer: {
        user: {
          token,
        },
      }
  }) => ({
    token
  });

export default connect(
    mapStateToProps,
    null,
)(MeetingPreview);