import React, { useState, Fragment } from "react";
import axios from 'axios';
import S from '../formStyles.js'


const MeetingCreate = ({ match, history }) => {
        // React Hooks declaration
        const [meetingName, setMeetingName] = useState("");
        const [isPublic, setPublic] = useState(false);
        const [isRecurring, setRecurring] = useState(false);
        const [startDate, setStartDate] = useState("");
        const [interval, setInterval] = useState("");

        const createMeeting = (event) => {
            event.preventDefault();
            const token = localStorage.getItem('token');
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
                    interval,
                    recurring: isRecurring, 
                },
              })
            .then(({data}) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        return(
            <Fragment>
            <h2> Meeting Creation </h2>
            <form onSubmit={createMeeting}>
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
                <label htmlFor="public">Public ?</label>
                <S.FlexList>
                    <li>
                        <label htmlFor="yes"> Yes </label>
                        <input
                        type="checkbox"
                        id="yes"
                        onChange={(e) => setPublic(true)} 
                        />
                    </li>
                    <li>
                        <label htmlFor="no"> No </label>
                        <input
                        type="checkbox"
                        id="no"
                        onChange={(e) => setPublic(false)} 
                        />
                    </li>
                </S.FlexList>
            </S.ListElement>
            <S.ListElement>
                <label htmlFor="date">Start Date </label>
                <input
                    type="date"
                    name="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)} 
                />
            </S.ListElement>
            <S.ListElement>
                <label htmlFor="recurring">Recurring ?</label>
                <S.FlexList>
                    <li>
                        <label htmlFor="yes"> Yes </label>
                        <input
                        type="checkbox"
                        id="yes"
                        onChange={(e) => setRecurring(true)} 
                        />
                    </li>
                    <li>
                        <label htmlFor="no"> No </label>
                        <input
                        type="checkbox"
                        id="no"
                        onChange={(e) => setRecurring(false)} 
                        />
                    </li>
                </S.FlexList>
            </S.ListElement>
            <S.ListElement>
                <label htmlFor="Interval">How Often? </label>
                <select onChange={(e) => setInterval(e.target.value)}>
                    <option value="Day">Daily</option>
                    <option value="Month">Monthly</option>
                    <option value="Week">Weekly</option>
                    <option value="Year">Yearly</option>
                </select>
            </S.ListElement>
            <S.ListElement>
                <button type="submit"> Create </button>
            </S.ListElement>
            </form>
            </Fragment>

        )
    }

export default MeetingCreate;