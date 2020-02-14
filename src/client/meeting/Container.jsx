import React, { useState, useCallback } from 'react'
import Card from './Card.jsx'
import update from 'immutability-helper'
const style = {
  width: 400,
}
const Container = ({activeCards, setPrioritizedCards, displayRow }) => {
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
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.content}
          moveCard={moveCard}
          displayRow={displayRow}
          
        />
      )
    }
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
}
export default Container