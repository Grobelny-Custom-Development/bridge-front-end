import React, { Component, Fragment } from "react";
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import BridgeWebAPI from '../../helpers/api.js';
import Loader from '../../helpers/Loader.jsx'
import Button from "../../bridge-components/Button.jsx";

const BoxContainerStyled = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;


const BoxItemStyled = styled.div`
    color: black;
    border-radius: 4px;
    box-shadow: 2px 4px #898989;
    margin: 5px;
    max-width: 200px;
    width: 200px;
    height: 200px;
    padding: 10px;
    flex-grow: 1;
    background-color: #ffff;
    a{
        text-decoration: none;
        color: inherit;
    }
    p{
        font-size: 12px;
    }
`;


class MeetingBrainstormSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeBrainstormCards: null,
          isLoading: false,
        }
      }

    componentDidMount(){
        const { match, token } = this.props;
        const {  params : { meetingID }} = match;

        this.setState({ isLoading: true})
        const brainstormURL = `${API_URL}/meetings/prioritization/`
        BridgeWebAPI.request({
            headers: { Authorization: `JWT ${token}`},
            url: brainstormURL, 
            method: 'GET',
            params: {
                meeting_uuid: meetingID
            }
         }).then(({data}) => {
            // TODO potentially just do this on the backend
            const { brainstorm_cards } = data;
            this.setState({ activeBrainstormCards: brainstorm_cards, isLoading: false})
        }).catch((error) => {
            console.log(error);
            this.setState({ isLoading: false})
        });
    }

    render(){
        const { activeBrainstormCards, isLoading } = this.state;
        const { history, match } = this.props;
        const {  params : { meetingID }} = match;

        return(
            <Fragment>
                <h2> Brainstorm Summary </h2>
                <Loader loading={isLoading} />
                { activeBrainstormCards && (
                 <BoxContainerStyled >
                        {
                            activeBrainstormCards.map(({content}) => (
                                <BoxItemStyled key={`${content}`}>
                                <p> {`${content}`}</p>
                                </BoxItemStyled>
                            ))
                }
                </BoxContainerStyled>
                
                )
                }

                <Button onClick={()=> history.push(`/meeting/activity/${meetingID}/prioritization/`)} text="Accept" />
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
)(MeetingBrainstormSummary);