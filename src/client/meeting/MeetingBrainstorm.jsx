import React, { Component, Fragment } from "react";
import axios from 'axios';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import S from '../formStyles.js'
import BridgeWebAPI from '../helpers/api.js';
import Button from "../bridge-components/Button.jsx";
import Loader from "../helpers/Loader.jsx";

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


class MeetingBrainstorm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          brainstormCards: null,
          content: '',
          isLoading: false,
        }
      }

    componentDidMount(){
        const { match, token } = this.props;
        const {  params : { meetingID }} = match;

        this.setState({ isLoading: true})
        BridgeWebAPI.request({
            headers: { Authorization: `JWT ${token}`},
            url: `${API_URL}/meetings/card/user/`,
            method: 'GET',
            params: {
                meeting_uuid: meetingID
            }
          })
        .then(({data}) => {
            const { cards } = data;
            this.setState({ brainstormCards: cards})
            this.setState({ isLoading: false})
        })
        .catch((error) => {
            this.setState({ isLoading: false})
        });
    }
    addCard = () => {
        const { match, token } = this. props;
        const { content } = this.state;
        const {  params : { meetingID }} = match;
        const brainstormURL = `${API_URL}/meetings/brainstorm/`;
        
        BridgeWebAPI.post(
            { Authorization: `JWT ${token}`},
            brainstormURL, 
            { content , 'meeting_uuid': meetingID}
            ).then(({data}) => {
            // TODO potentially just do this on the backend
            const { brainstorm_cards } = data;
            this.setState({ brainstormCards: brainstorm_cards, isLoading: false, content: ''})
        }).catch((error) => {
            this.setState({ isLoading: false})
        })
    }

    render(){
        const { brainstormCards, isLoading, content } = this.state;
        const { history, match } = this.props;
        const {  params : { meetingID }} = match;

        const disableCardSubmission = !!(!content)
        const cardText = (disableCardSubmission) ? "Enter a value" : "Add Card";

        return(
            <Fragment>
                <h2> Brainstorm Activity </h2>
                { brainstormCards && (
                 <BoxContainerStyled >
                        {
                            brainstormCards.map(({content}) => (
                                <BoxItemStyled key={`${content}`}>
                                <p> {`${content}`}</p>
                                </BoxItemStyled>
                            ))
                        }
                    <BoxItemStyled>
                    <textarea value={content} onChange={(e)=> this.setState({content: e.target.value})} />
                    <Button disabled={disableCardSubmission} onClick={()=> this.addCard()} text={cardText} />
                    </BoxItemStyled>
                </BoxContainerStyled>
                
                )
                }
                <Loader loading={isLoading} />
                <Button onClick={()=> history.push(`/meeting/activity/${meetingID}/brainstorm/summary`)} text="Continue" />
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
)(MeetingBrainstorm);