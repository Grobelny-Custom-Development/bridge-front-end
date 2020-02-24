import styled from '@emotion/styled';
import moment from 'moment'
import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import {
    Link,
  } from "react-router-dom";
import BridgeWebAPI from '../helpers/api.js';
import Loader from '../helpers/Loader.jsx';

const BoxContainerStyled = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;


const BoxItemStyled = styled.div`
    color: black;
    border-radius: 4px;
    box-shadow: 2px 4px #898989;
    margin: 5px;
    max-width: 200px;
    width: 200px;
    height: 200px;
    padding: 10px;
    flex-grow: 1;
    background-color: #ffff;
    a{
        text-decoration: none;
        color: inherit;
    }
    p{
        font-size: 12px;
    }
`;


class MeetingActive extends Component{
    constructor(props) {
        super(props);
        this.state = {
          activeMeetings: null,
          loading: false,
        }
      }

    componentDidMount(){
        this.requestActiveMeetings();
    }

    requestActiveMeetings = () => {
        this.setState({loading: true})
        const { token } = this.props;
        BridgeWebAPI.request(({
            headers: { Authorization: `JWT ${token}`},
            url: `${API_URL}/meetings/active/`,
            method: 'GET'
          })).then(({data}) => {
            const { meetings } = data;
            this.setState({ activeMeetings: meetings})
            this.setState({ loading: false})
        })
        .catch((error) => {
            this.setState({ loading: false})
        });
    }


    render(){
        const { activeMeetings, loading } = this.state;
        const displayActiveMeetings =  !!(activeMeetings && activeMeetings.length > 0 && !loading );
        const displayNoMeetings = !!( activeMeetings && activeMeetings.length == 0 && !loading);
        return(
            <Fragment>
                {
                    displayActiveMeetings && (
                        <BoxContainerStyled >{
                            activeMeetings.map(({meeting_uuid, start_date, meeting_template}) => (
                                <BoxItemStyled>
                                <Link to={`/meeting/preview/${meeting_uuid}/`}>{meeting_template.name}</Link>
                                  <p>{`Description: ${meeting_template.description}`}</p>
                                  <p>{`Start Date: ${moment(start_date).format('MMMM Do YYYY, h:mm:ss a')}`}</p>
                                </BoxItemStyled>
                            ))
                        }
                        </BoxContainerStyled >
                    )

                }
                { displayNoMeetings && (
                    <p> No Active Meetings</p>
                )

                }
                <Loader loading={loading} />
            
            </Fragment>
        )


    }

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
)(MeetingActive);
