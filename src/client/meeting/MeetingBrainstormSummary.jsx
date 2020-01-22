import React, { Component, Fragment } from "react";
import axios from 'axios';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import S from '../formStyles.js'

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


class MeetingBrainstormSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeBrainstormCards: null,
          isLoading: false,
        }
      }

    componentDidMount(){
        const { match, token } = this.props;
        const {  params : { meetingID }} = match;

        this.setState({ isLoading: true})
        axios({
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              Authorization: `JWT ${token}`
            },
            url: `${API_URL}/meetings/prioritization/`,
            method: 'GET',
            params: {
                meeting_uuid: meetingID
            }
          })
        .then(({data}) => {
            const { cards } = data;
            this.setState({ activeBrainstormCards: cards})
            this.setState({ isLoading: false})
        })
        .catch((error) => {
            console.log(error);
            this.setState({ isLoading: false})
        });
    }

    render(){
        const { activeBrainstormCards, isLoading } = this.state;
        const { history, match } = this.props;
        const {  params : { meetingID }} = match;

        return(
            <Fragment>
                <h2> Brainstorm Summary </h2>
                { activeBrainstormCards && (
                 <BoxContainerStyled >
                        {
                            activeBrainstormCards.map(({content}) => (
                                <BoxItemStyled key={`${content}`}>
                                <p> {`${content}`}</p>
                                </BoxItemStyled>
                            ))
                }
                </BoxContainerStyled>
                
                )
                }
                {
                    isLoading && (
                        <h3> Loading ...</h3>
                    )
                }
                <S.ButtonElement onClick={()=> history.push(`/meeting/activity/${meetingID}/prioritization/`)}> Accept </S.ButtonElement>
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
)(MeetingBrainstormSummary);