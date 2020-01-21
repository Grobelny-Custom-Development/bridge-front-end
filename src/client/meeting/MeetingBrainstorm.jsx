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


class MeetingBrainstorm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          brainstormCards: null,
          content: null,
        }
      }

    componentDidMount(){
        const { match, token } = this.props;
        const {  params : { meetingID }} = match;
        axios({
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              Authorization: `JWT ${token}`
            },
            url: `${API_URL}/meetings/brainstorm/`,
            method: 'GET',
            params: {
                meeting_uuid: meetingID
            }
          })
        .then(({data}) => {
            const { brainstorm_cards } = data;
            this.setState({ brainstormCards: brainstorm_cards})
        })
        .catch((error) => {
            console.log(error);
        });
    }
    addCard = () => {
        const { match, token } = this. props;
        const { content } = this.state;
        const {  params : { meetingID }} = match;

        const postData = new FormData();
        postData.append('content', content);
        postData.append('meeting_uuid', meetingID);
        axios({
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              Authorization: `JWT ${token}`
            },
            url: `${API_URL}/meetings/brainstorm/`,
            method: 'POST',
            data: postData,
          })
        .then(({data}) => {
            const { brainstorm_cards } = data;
            this.setState({ brainstormCards: brainstorm_cards})
        })
        .catch((error) => {
            console.log(error);
        }); 
    }
    render(){
        const { brainstormCards } = this.state;
        return(
            <Fragment>
                <h1> Brainstorm Activity </h1>
                <BoxContainerStyled >
                {
                    brainstormCards && (
                        <Fragment>{
                            brainstormCards.map(({content}) => (
                                <BoxItemStyled>
                                <p> {`${content}`}</p>
                                </BoxItemStyled>
                            ))
                        }
                        </Fragment>
                    )
    
                }
                    <BoxItemStyled>
                        <textarea onChange={(e)=> this.setState({content: e.target.value})} />
                        <S.ButtonElement onClick={()=> this.addCard()}> Add Card </S.ButtonElement>
                    </BoxItemStyled>
                </BoxContainerStyled>
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
)(MeetingBrainstorm);