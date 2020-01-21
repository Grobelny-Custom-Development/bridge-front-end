import axios from 'axios';
import styled from '@emotion/styled';
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


class MeetingTemplateActive extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeTemplates: null,
        }
      }

    componentDidMount(){
        const { token } = this.props;
        const templateURL = `${API_URL}/meetings/active/template`
        axios({
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              Authorization: `JWT ${token}`
            },
            url: templateURL,
            method: 'GET',
          })
        .then(({data}) => {
            const { templates } = data;
            this.setState({ activeTemplates: templates})
        })
        .catch((error) => {
            console.log(error);
        });
    }


    render(){
        const { activeTemplates } = this.state;
        return(
            <Fragment>
                {
                    activeTemplates && (
                        <BoxContainerStyled >{
                            activeTemplates.map(({name, description}) => (
                                <BoxItemStyled>
                                <Link to={`/meeting/preview/`}>{name}</Link>
                                  <p>{`Description: ${description}`}</p>
                                </BoxItemStyled>
                            ))
                        }
                        </BoxContainerStyled >
                    )

                }
                { !activeTemplates && (
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
)(MeetingTemplateActive);