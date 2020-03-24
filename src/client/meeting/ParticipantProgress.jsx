import React from "react";




const ParticipantProgress = ({participants, display}) => {
    const canDisplay = (participants && participants.length > 0);
    return(
    <ul>
      <h2> Participants </h2>
    { display && canDisplay && (
      
      participants.map((participant) => (
        <li> {participant.email} </li>
    )
      )
    )
    }
  </ul>
    )
}

export default ParticipantProgress;