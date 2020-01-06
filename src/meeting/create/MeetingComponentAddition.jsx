import React, { useState } from "react";
import S from '../../formStyles.js'

const MeetingComponentAddition =  (props) => {
    const { selectedComponents, componentList, updateComponentList } = props;

    const [meetingComponentName, setMeetingComponentName] = useState("");
    const [selectedComponent, selectComponent ] = useState(componentList[0]);

    return(
        <S.ListElement>
            <label htmlFor="meeting-component">Meeting Component</label>
            <input
                type="text"
                name="meeting-component"
                value={meetingComponentName}
                onChange={(e) => setMeetingComponentName(e.target.value)} 
            />
        
            { componentList && 
                <select onChange={(e) => selectComponent(e.target.value)} value={selectedComponent}>
                    { componentList.map( (component) => (
                        <option value={component} > {component.name}</option>
                        )
                    )
                    }
                 </select>
            }

            <button onClick={ () => {
                const updatedComponentList = selectedComponents.concat([selectedComponent]);
                updateComponentList(updatedComponentList)
                }}> + </button>
        </S.ListElement>
    )
}

export default MeetingComponentAddition;