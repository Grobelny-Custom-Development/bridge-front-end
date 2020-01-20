import axios from 'axios';
import React, { useState, useEffect, Fragment } from "react";
import { connect } from 'react-redux';


import S from '../../formStyles.js'
import MeetingMeta from "./MeetingMeta.jsx";
import MeetingTiming from "./MeetingTiming.jsx";
import MeetingComponentSummary from "./MeetingComponentSummary.jsx";


const MeetingCreate = (props) => {
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
                const { token } = props;
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

        const createMeeting = async () => {
            const meetingCreateUrl = `${API_URL}/meetings/structure/create/`
            const { token, history } = props;
            const postData = new FormData();
            postData.append('name', meetingName);
            postData.append('public', isPublic);
            postData.append('start_date', startDate);
            postData.append('description', meetingDescription);
            postData.append('recurring', isRecurring);
            postData.append('interval', interval);
            postData.append('selected_components', JSON.stringify(selectedComponents));


            const response = await axios({
                headers: {
                  'X-Requested-With': 'XMLHttpRequest',
                  Authorization: `JWT ${token}`
                },
                url: meetingCreateUrl,
                method: 'POST',
                data: postData,
              })
            if ( response.status === 200){
              const { data : { meeting_uuid }} = response;
              history.push(`/meeting/preview/${meeting_uuid}`)
            }

            // redirect to your meetings
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
            { selectedComponents &&
              <MeetingComponentSummary
                componentList={selectedComponents}
              />
            }
            <MeetingTiming
                startDate = {startDate}
                setPublic = {setPublic}
                isPublic = {isPublic}
                isRecurring ={isRecurring}
                setStartDate = {setStartDate} 
                setRecurring = {setRecurring}
                setInterval = {setInterval}
            />
            <S.ButtonElement onClick={ () => createMeeting()}> Create </S.ButtonElement>
            </Fragment>

        )
    }
const mapStateToProps = ({
  reducer: {
    user: {
      token,
    },
  }
      }) => ({
        token
      });
    
export default connect(
        mapStateToProps,
        null,
    )(MeetingCreate);