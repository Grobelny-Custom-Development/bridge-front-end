import React, { Fragment, Component, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import update from 'immutability-helper';

import GroupingBoxContainer from './GroupingBoxContainer.jsx';
import Card from '../ranking/Card.jsx';
import Button from '../../bridge-components/Button.jsx'

const ListContainerStyled = styled.ul`
display: flex;
width: 100%;
flex-direction: row;
flex-wrap: wrap;
padding: 0;
p{
  width: 10%;
}
`;


const GroupingContainer = ({ activeCards, activeBuckets, completeActivity }) => {
    const [cards, setCards] = useState(activeCards);
    const [droppedSubmission, setDroppedSubmission] = useState({});
    const moveCard = useCallback(
        (dragIndex, hoverIndex) => {
          const dragCard = cards[dragIndex];
          const updatedCardOrdering = update(cards, { $splice: [ [dragIndex, 1], [hoverIndex, 0, dragCard],],});
          setCards(updatedCardOrdering);
        },
        [cards],
      )
    
    const bucketWidth = (1/activeBuckets.length)*100;
    const buttonDisable = !!( cards.length > 0);
    return(
        <Fragment>
        <h2> Active Cards </h2>
        <ListContainerStyled>
        { cards.map((card, index) => (
            <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.content}
            moveCard={moveCard}
            />
        )
        )}
        </ListContainerStyled>
        <h2> Active Buckets </h2>
        <ListContainerStyled>
        { activeBuckets.map((bucket, index) => (
            <GroupingBoxContainer
                key={`${index}${bucket.name}`} 
                cards={cards} 
                setCards={setCards}
                bucket={bucket} 
                bucketWidth={bucketWidth} 
                droppedSubmission={droppedSubmission}
                setDroppedSubmission={setDroppedSubmission}
                
                />
        ))
        }
        </ListContainerStyled>
        <Button disabled={buttonDisable} onClick={()=> completeActivity(droppedSubmission)} text="Next" />
        
        </Fragment>
    )
}

export default GroupingContainer;