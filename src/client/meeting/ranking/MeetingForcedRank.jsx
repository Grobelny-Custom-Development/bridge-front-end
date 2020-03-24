import React, { useState, useEffect, Fragment, Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Container from './Container.jsx'
import BridgeWebAPI from '../../helpers/api.js';
import Button from '../../bridge-components/Button.jsx'


const ListContainerStyled = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 0;
p{
  width: 10%;
}
`;

class MeetingForcedRank extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeCards: null,
          prioritizedCards: null,
          isLoading: false,
        }
      }
    componentDidMount(){
        const { token, match } = this.props;
        const {  params : { meetingID }} = match;
        BridgeWebAPI.request({
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `JWT ${token}`
              },
            url: `${API_URL}/meetings/card/active/`,
            method: 'GET',
            params: {
                activity_uuid: meetingID
            }
        }).then(({data}) => {
            const {cards } = data;
            this.setState({ activeCards: cards})
        })

    }

    setPrioritizedCards = (prioritizedCards) => {
      this.setState({ prioritizedCards: prioritizedCards})
  }

  // TODO:: Configure Prioritization Submission
  submitActivity = () => {
    
  }


    render(){
        const { history, nextURL } = this.props;
        const { activeCards } = this.state;
        const displayActiveCards =  !!( activeCards && activeCards.length > 0);
        return(
            <Fragment>
            <h1> Forced Rank </h1>
            <ListContainerStyled>
            <p>
              High Rank
            </p>
            { displayActiveCards && 
                
              <DndProvider backend={Backend}>
                  <Container 
                  width="80%" 
                  displayRow 
                  activeCards={activeCards} 
                  setPrioritizedCards={this.setPrioritizedCards} />
              </DndProvider>
            }
            <p>
              Low Rank
            </p>
            </ListContainerStyled>
            <div>
            <Button onClick={()=> history.push(nextURL)} text="Next" />
            </div>
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
)(MeetingForcedRank);