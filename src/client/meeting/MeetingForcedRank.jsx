import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import S from '../formStyles.js';
import Card from '../meeting/Card.jsx';

import request from '../clientRequest.js';

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Container from './Container.jsx'


const ListContainerStyled = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 0;
`;

const ListItemStyled = styled.li`
    color: black;
    border-radius: 4px;
    box-shadow: 2px 4px #898989;
    height: 50px;
    padding: 10px;
    flex-grow: 1;
    list-style: none;
    background-color: #ffff;
    margin-bottom: 5px;
    p{
        font-size: 12px;
    }
    width:100px;
    display: inline;
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
        request({
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `JWT ${token}`
              },
            url: `${API_URL}/meetings/card/active/`,
            method: 'GET',
            params: {
                meeting_uuid: meetingID
            }
        }).then((data) => {
            const {cards } = data;
            this.setState({ activeCards: cards})
        })

    }

    setPrioritizedCards = (prioritizedCards) => {
      this.setState({ prioritizedCards: prioritizedCards})
  }


    render(){
        const { activeCards } = this.state;
        const displayActiveCards =  !!( activeCards && activeCards.length > 0)
        return(
            <Fragment>
            <h1> Forced Rank </h1>
            <ListContainerStyled>
            <p>
              High Rank
            </p>
            { displayActiveCards && 
                
                    <DndProvider backend={Backend}>
                        <Container displayRow activeCards={activeCards} setPrioritizedCards={this.setPrioritizedCards} />
                    </DndProvider>
                
            }
            <p>
              Low Rank
            </p>
            </ListContainerStyled>
            <div>
            <S.ButtonElement onClick={()=> history.push(`/meeting/activity/${meetingID}/forcedrank`)}> Next </S.ButtonElement>
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