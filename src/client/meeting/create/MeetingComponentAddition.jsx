import React, { Fragment, useState } from "react";
import S from '../../formStyles.js'
import Button from "../../bridge-components/Button.jsx";

const MeetingComponentAddition =  (props) => {
    const { selectedComponents, componentList, updateComponentList } = props;

    const [meetingComponentName, setMeetingComponentName] = useState("");
    const [meetingComponentDuration, setMeetingComponentDuration] = useState("");
    const [selectedComponent, selectComponent ] = useState({});
    const matchSelectedComponent = (id) => {
            const matchedComponent = { ...componentList.find(component => (id == component.id))};
            matchedComponent.agenda_item = meetingComponentName;
            matchedComponent.duration = meetingComponentDuration;
            selectComponent(matchedComponent);
    }
    return(
        <Fragment>
        <S.ListElement>
            <label htmlFor="meeting-component">Meeting Component</label>
            <input
                type="text"
                name="meeting-component"
                value={meetingComponentName}
                placeholder={'Name'}
                onChange={(e) => setMeetingComponentName(e.target.value)} 
            />
            <input
                type="number"
                name="meeting-component-duration"
                value={meetingComponentDuration}
                placeholder={'Duration'}
                onChange={(e) => setMeetingComponentDuration(e.target.value)} 
            />
        
            <select onChange={(e) => matchSelectedComponent(e.target.value)} >
                <option key={'none'} value={null} >{"Type"}</option> 
                { componentList && componentList.map( (component) => (
                    <option key={component.type} value={component.id} > {component.name}</option>
                    )
                )
                }
                </select>
            <Button
             onClick={ () => {
            const updatedComponentList = selectedComponents.concat([selectedComponent]);
            updateComponentList(updatedComponentList)
            }} text="+"/>
        </S.ListElement>

        </Fragment>
    )
}

export default MeetingComponentAddition;