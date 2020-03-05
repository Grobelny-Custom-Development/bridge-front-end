import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd'
import update from 'immutability-helper';
import styled from '@emotion/styled';

import Card from '../ranking/Card.jsx';

const StyledBucket = styled.div`
  background-color: ${props => (props.backgroundColor)};
  width: ${ props => (props.width)}
  height: ${ props => (props.height)}
  color: ${ props => (props.color)}
`;
const GroupingBox = ({ onDrop, droppedCards, setDroppedCards, bucket, bucketWidth }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'card',
    drop: onDrop,
    collect: monitor => {
      return({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  },
  })
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = droppedCards[dragIndex];
      const updatedCardOrdering = update(droppedCards, { $splice: [ [dragIndex, 1], [hoverIndex, 0, dragCard]]});
      setDroppedCards(updatedCardOrdering);
    },
    [droppedCards],
  )
  const isActive = canDrop && isOver
  let backgroundColor = 'transparent'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <StyledBucket ref={drop} backgroundColor={backgroundColor} width={`${bucketWidth}%`} height='100px' color='black'>
      <p>{bucket.name}</p>
      {isActive ? 'Release to drop' : 'Drag a card here'}
      { droppedCards.map((card, index) => (
            <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.content}
            moveCard={moveCard}
            />
        )
        )}
    </StyledBucket>
  )
}
export default GroupingBox;