import axios from 'axios';
import React, { useState, useEffect, Fragment } from "react";
import { connect } from 'react-redux';


import S from '../../formStyles.js'
import MeetingMeta from "./MeetingMeta.jsx";
import MeetingTiming from "./MeetingTiming.jsx";
import MeetingComponentSummary from "./MeetingComponentSummary.jsx";
import BridgeWebAPI from '../../helpers/api.js';


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
                const result = await 
                BridgeWebAPI.request(({
                  headers: { Authorization: `JWT ${token}`},
                  url: meetingCreateUrl,
                  method: 'GET'
                }))
                const { data } = result;
                setComponentList(data.components);
            }
            fetchComponents();

          }, []);

        const createMeeting = async () => {
            const meetingCreateUrl = `${API_URL}/meetings/structure/create/`
            const { token, history } = props;
            const postData = {
              name: meetingName,
              public: isPublic,
              start_date: startDate,
              description: meetingDescription,
              recurring: isRecurring,
              interval,
              selected_components: JSON.stringify(selectedComponents)
            }

          const response = await BridgeWebAPI.post(
              { Authorization: `JWT ${token}`},
              meetingCreateUrl,
              postData,
            )

            // redirect to your meetings
            if ( response.status === 200){
              const { data : { meeting_uuid }} = response;
              history.push(`/meeting/preview/${meeting_uuid}`)
            }
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