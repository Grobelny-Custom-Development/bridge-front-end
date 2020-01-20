import React, { Fragment } from "react";
import S from '../../formStyles.js'
import MeetingComponentAddition from "./MeetingComponentAddition.jsx";



const MeetingMeta = (props) => {

    const { meetingName, meetingDescription,
        componentList, setMeetingName,
        setMeetingDescription, setComponent,
        addComponent, updateComponentList,
        selectedComponents,
    } = props;
    return(
    <Fragment>
    <S.ListElement>
        <label htmlFor="meeting-name">Meeting Name</label>
        <input
            type="text"
            name="meeting-name"
            value={meetingName}
            onChange={(e) => setMeetingName(e.target.value)} 
        />
    </S.ListElement>
    <S.ListElement>
        <label htmlFor="meeting-description">Meeting Description</label>
        <input
            type="text"
            name="meeting-description"
            value={meetingDescription}
            onChange={(e) => setMeetingDescription(e.target.value)} 
        />
    </S.ListElement>
    { componentList &&
    <MeetingComponentAddition 
        updateComponentList ={ updateComponentList }
        componentList ={ componentList}
        addComponent = { addComponent }
        selectedComponents = { selectedComponents} 
        />
    }

    </Fragment>
    )
}

export default MeetingMeta;