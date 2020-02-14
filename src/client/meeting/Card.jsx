import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import styled from '@emotion/styled';

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
    opacity: ${props => (props.opacity ? props.opacity : '0')};
    display: ${props => (props.displayRow? 'inline-flex': 'list-item')};
`;
const Card = ({ id, text, index, moveCard, displayRow }) => {
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: 'card',
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card', id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  return (
    <ListItemStyled ref={ref} key={`${text}`} opacity={opacity} displayRow={displayRow}> 
        {`${text}`} 
    </ListItemStyled>
  )
}
export default Card
