
import styled from '@emotion/styled';
import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import BridgeWebAPI from '../../helpers/api.js';
import Button from '../../bridge-components/Button.jsx';
import { setComponents, setParticipants } from '../../actions/ComponentActions.js';

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
          nextActivity:null,
          activeComponents: null,
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
            const { meeting, activities, participants } = data;
            const { meeting_template : meetingTemplate } = meeting;
            this.setState({ activeMeetingTemplate: meetingTemplate, meetingUUID: meeting.meeting_uuid, activeComponents: activities })
            this.props.setComponentsAction(activities)
            this.props.setParticipantsAction(participants)
            // next activity
            this.setState({nextActivity: activities[0]})

        })
        .catch((error) => {
            console.log(error);
        });
    }
    

    render(){
        const { activeMeetingTemplate, nextActivity, activeComponents } = this.state;
        const { history } = this.props;
        const nextActivityURL = (nextActivity)? `/meeting/activity/${nextActivity.activity_uuid}/${nextActivity.activity_type}/` : '';
        return(
        <Fragment>
            {
                activeMeetingTemplate && (
                  <Fragment>
                    <BoxItemStyled>
                    
                    <h2>{`${activeMeetingTemplate.name}`}</h2>
                    <h3>{`${activeMeetingTemplate.description}`}</h3>
                    { activeComponents.length > 0 && (
                      activeComponents.map( (component) => (
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
                    <Button onClick={ () => history.push(nextActivityURL)} text="Start Prework"/>
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
        components,
        participants,
      }
  }) => ({
    token
  });

const mapDispatchToProps = dispatch => ({
    setComponentsAction: components => dispatch(setComponents(components)),
    setParticipantsAction: participants => dispatch(setParticipants(participants))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MeetingPreview);