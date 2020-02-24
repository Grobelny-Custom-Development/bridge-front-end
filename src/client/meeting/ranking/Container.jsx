import React, { useState, useCallback } from 'react'
import Card from './Card.jsx'
import update from 'immutability-helper'
import styled from '@emotion/styled';


const StyledContainer = styled.div`
  width: ${props => (props.width ? props.width : '400px')};
`;
const Container = ({activeCards, setPrioritizedCards, displayRow, width }) => {
    const [cards, setCards] = useState(activeCards);
    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        console.log(`dragIndex ${dragIndex}`);
        console.log(`hoverIndex ${hoverIndex}`);
        const dragCard = cards[dragIndex];
        const prioritizedCards = update(cards, { $splice: [ [dragIndex, 1], [hoverIndex, 0, dragCard],],});
        setCards(prioritizedCards);
        setPrioritizedCards(prioritizedCards);
      },
      [cards],
    )
    const renderCard = (card, index) => {
      const cardWidth =  (width) ? `${80 / cards.length}%` : '400px';
      console.log(cardWidth)
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.content}
          moveCard={moveCard}
          displayRow={displayRow}
          width={cardWidth}
        />
      )
    }
    
    return (
      <StyledContainer width={width} >
          {cards.map((card, i) => renderCard(card, i))}
      </StyledContainer>
    )
}
export default Container