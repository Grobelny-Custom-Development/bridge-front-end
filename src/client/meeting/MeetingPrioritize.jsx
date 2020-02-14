import React, { Component, Fragment } from "react";
import axios from 'axios';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import S from '../formStyles.js'
import BridgeWebAPI from '../helpers/api.js'

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Container from './Container.jsx'

const ListContainerStyled = styled.ul`
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding: 0;
`;

class MeetingPrioritize extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeCards: null,
          prioritizedCards: null,
          isLoading: false,
        }
      }

    componentDidMount(){
        const { match, token } = this.props;
        const {  params : { meetingID }} = match;

        this.setState({ isLoading: true})
        BridgeWebAPI.request({
            headers: {
              Authorization: `JWT ${token}`
            },
            url: `${API_URL}/meetings/card/active/`,
            method: 'GET',
            params: {
                meeting_uuid: meetingID
            }
          })
        .then(({data}) => {
            const { cards } = data;
            this.setState({ activeCards: cards, prioritizedCards: cards})
            this.setState({ isLoading: false})
        })
        .catch((error) => {
            console.log(error);
            this.setState({ isLoading: false})
        });
    }

    setPrioritizedCards = (prioritizedCards) => {
        this.setState({ prioritizedCards: prioritizedCards})
    }

    saveOrdering = async () => {
        const { prioritizedCards } = this.state;
        const prioritizeUrl = `${API_URL}/meetings/prioritization/`
        const { match, token, history } = this.props;
        const {  params : { meetingID }} = match;

        const postData = {
          'meeting_uuid': meetingID,
          'prioritized_cards': prioritizedCards
      };
        const response = await BridgeWebAPI.request({
                headers: {
                  Authorization: `JWT ${token}`
                },
                url: prioritizeUrl,
                method: 'POST',
                data: postData,
              })
        if ( response.status === 200){
            history.push(`/meeting/activity/${meetingID}/prioritization/summary`);
        }

        // redirect to your meetings
    }
    render(){
        const { activeCards, isLoading } = this.state;
        const { history } = this.props;
        const displayActiveCards = (activeCards && activeCards.length > 0)
        return(
            <Fragment>
            <h2> Prioritization Activity </h2>
            <p> Drag and drop the cards in order of highest (top) and the least (bottom) priority.</p>
            { displayActiveCards &&
            <ListContainerStyled>
                <DndProvider backend={Backend}>
                    <Container activeCards={activeCards} setPrioritizedCards={this.setPrioritizedCards} />
                </DndProvider>
            </ListContainerStyled>
            }
            <S.ButtonElement onClick={()=> this.saveOrdering()}> Next </S.ButtonElement>
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
)(MeetingPrioritize);