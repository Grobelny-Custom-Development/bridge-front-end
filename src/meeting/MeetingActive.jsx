import React, { Component, Fragment } from "react";
import {
    Link,
  } from "react-router-dom";
import axios from 'axios';
import S from '../formStyles.js'



class MeetingActive extends Component{
    constructor(props) {
        super(props);
        this.state = {
          activeMeetings: null,
        }
      }

    componentDidMount(){
        const token = localStorage.getItem('token');
        axios({
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              Authorization: `JWT ${token}`
            },
            url: 'http://localhost:8000/meetings/active/',
            method: 'GET',
          })
        .then(({data}) => {
            const { meetings } = data;
            this.setState({ activeMeetings: meetings})
        })
        .catch((error) => {
            console.log(error);
        });
    }


    render(){
        console.log('in meeting active')
        const { activeMeetings } = this.state;
        return(
            <Fragment>
                {
                    activeMeetings && (
                        <Fragment>{
                            activeMeetings.map(({meeting_uuid, name}) => (
                                <Link to={`/meeting/activity/brainstorm/${meeting_uuid}`}>{name}</Link>
                            ))
                        }
                        </Fragment>
                    )

                }
            
            </Fragment>
        )


    }

}

export default MeetingActive;