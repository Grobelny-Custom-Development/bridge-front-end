import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';

import S from '../../formStyles.js'
import MeetingMeta from "./MeetingMeta.jsx";
import MeetingTiming from "./MeetingTiming.jsx";
import MeetingComponentSummary from "./MeetingComponentSummary.jsx";


const MeetingCreate = ({ match, history }) => {
        // React Hooks declaration
        const [meetingName, setMeetingName] = useState("");
        const [meetingDescription, setMeetingDescription] = useState("");
        const [isPublic, setPublic] = useState(false);
        const [isRecurring, setRecurring] = useState(false);
        const [startDate, setStartDate] = useState("");
        const [interval, setInterval] = useState("");
        const [componentList, setComponentList ] = useState(null);
        const [selectedComponents, updateComponentList] = useState([]);
 
        useEffect( () => {
            const fetchComponents = async () => {
                const token = localStorage.getItem('token');
                const meetingCreateUrl = `${API_URL}/meetings/components/`
                const result = await axios({
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        Authorization: `JWT ${token}`
                        },
                        url: meetingCreateUrl,
                        method: 'GET',
                })
                const { data } = result;
                setComponentList(data.components);
            }
            fetchComponents();

          }, []);

        const createMeeting = async (event) => {
            event.preventDefault();
            const meetingCreateUrl = `${API_URL}/meetings/structure/create/`
            const token = localStorage.getItem('token');
            const postData = new FormData();
            postData.append('name', meetingName);
            postData.append('public', isPublic);
            postData.append('start_date', startDate);
            postData.append('interval', interval);
            postData.append('recurring', isRecurring);
            postData.appene('selected_components', JSON.stringify(selectedComponents));


            const result = await axios({
                headers: {
                  'X-Requested-With': 'XMLHttpRequest',
                  Authorization: `JWT ${token}`
                },
                url: meetingCreateUrl,
                method: 'POST',
                data: postData,
              })
            console.log(result);
        }
        return(
            <Fragment>
            <h2> Meeting Creation </h2>
            <MeetingMeta
                componentList = {componentList}
                selectedComponents = { selectedComponents}
                meetingName = {meetingName} 
                meetingDescription = {meetingDescription} 
                setMeetingName = {setMeetingName}
                setMeetingDescription = {setMeetingDescription}
                updateComponentList = { updateComponentList }
            />
            <MeetingComponentSummary
                componentList={selectedComponents}
            />
            <MeetingTiming
                startDate = {startDate}
                setPublic = {setPublic}
                setStartDate = {setStartDate} 
                setRecurring = {setRecurring}
                setInterval = {setInterval}
            />
            <S.ListElement>
                <button onClick={ () => createMeeting()}> Create </button>
            </S.ListElement>
            </Fragment>

        )
    }

export default MeetingCreate;