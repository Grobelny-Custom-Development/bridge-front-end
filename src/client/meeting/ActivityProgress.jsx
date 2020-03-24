import React from "react";


const ActivityProgress = ({ components, display}) => {
  const canDisplay = (components && components.length > 0);
    return(
    <ul>
      <h2> Meeting Name </h2>
    { display && canDisplay && (
      components.map((component) =>(
        <li> {component.activity_type} </li>
      )
      )
    )
    }
  </ul>
    )
}

export default ActivityProgress;