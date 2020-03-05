import React, { useState } from 'react';
import GroupingBox from './GroupingBox.jsx';




const GroupingBoxContainer = ({ bucket, cards, bucketWidth, setCards, droppedSubmission, setDroppedSubmission }) => {
    const [droppedCards, setDroppedCards] = useState([]);
    const handleDrop = (item) => {
        console.log(item)
        if(item.id){
            const cardToDropIndex = cards.findIndex(card => (card.id == item.id));
            if(cardToDropIndex != -1){
                const updatedDroppedCardList = droppedCards.concat([cards[cardToDropIndex]]);
                const updatedCardsList = cards.filter((item,index) => index != cardToDropIndex);
                setCards(updatedCardsList);
                setDroppedCards(updatedDroppedCardList);
                const updatedDroppedSubmission = droppedSubmission;
                updatedDroppedSubmission[bucket.id] = JSON.stringify(updatedDroppedCardList);
                setDroppedSubmission(droppedSubmission);
                console.log(updatedDroppedCardList)
            }
        }
        return({ item})
    }

    return(
        <GroupingBox 
            bucket={bucket}
            bucketWidth={bucketWidth} 
            droppedCards={droppedCards}
            setDroppedCards={setDroppedCards}
            onDrop={ item => handleDrop(item)} />
    )
}

export default GroupingBoxContainer; 