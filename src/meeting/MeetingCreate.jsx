import React, { useState, Fragment } from "react";
import axios from 'axios';


const MeetingCreate = ({ match }) => {
        // React Hooks declaration
        const [meetingName, setMeetingName] = useState("");
        const [isPublic, setPublic] = useState(false);
        const [isRecurring, setRecurring] = useState(false);
        const [startDate, setStartDate] = useState("");
        const [interval, setInterval] = useState("");

        const createMeeting = (event) => {
            event.preventDefault();
            console.log('create meeting')
            const token = localStorage.getItem('token');
            console.log('auth token')
            axios({
                headers: {
                  'X-Requested-With': 'XMLHttpRequest',
                  Authorization: `JWT ${token}`
                },
                url: 'http://localhost:8000/meetings/structure/create/',
                method: 'POST',
                data: { 
                    name: meetingName, 
                    public: isPublic, 
                    start_date: startDate, 
                    interval 
                },
              })
            .then(({data}) => {
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            });
        }
        return(
            <Fragment>
            <h2> Meeting Creation </h2>
            {/* <form onSubmit={createMeeting}> */}
                <input
                type="text"
                name="meeting-name"
                value={meetingName}
                onChange={(e) => setMeetingName(e.target.value)} 
                /> <br />
                <input type="checkbox" name="public" onChange={(e) => setPublic(!e.target.checked)} /> Public <br />
                <input type="date" name="start-date" onChange={ (e) => setStartDate(e.target.value)} value={startDate} /> Start Date <br />
                <input type="checkbox" name="recurring" onChange={ (e) => setRecurring(!e.target.checked)} /> Recurring <br />
                { !isRecurring &&
                <select onChange={(e) => setInterval(e.target.value)}>
                    <option value="Daily">Daily</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Yearly">Yearly</option>
                </select>
                }

                <button type="button" onClick={e => createMeeting(e)}> Create</button>
            {/* </form> */}
            </Fragment>

        )
    }

export default MeetingCreate;