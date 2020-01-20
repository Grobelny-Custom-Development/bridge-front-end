import axios from 'axios';
import styled from '@emotion/styled';
import moment from 'moment'
import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import {
    Link,
  } from "react-router-dom";

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
        }
      }

    componentDidMount(){
        const { token } = this.props;
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
                { !activeMeetings && (
                    <p> No Active Meetings</p>
                )

                }
            
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
