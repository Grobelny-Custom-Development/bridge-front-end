import React, { useState, useEffect, Fragment } from "react";
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import BridgeWebAPI from '../helpers/api.js';
import Button from "../bridge-components/Button.jsx";
import Loader from "../helpers/Loader.jsx";

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


const MeetingBrainstorm = (props) => {
  const { history, nextURL, token, match } = props;
  const {  params : { meetingID }} = match;

  const [brainstormCards, setBrainstormCards] = useState(null);
  const [content, setContent] = useState('');
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    BridgeWebAPI.request({
      headers: { Authorization: `JWT ${token}`},
      url: `${API_URL}/meetings/card/user/`,
      method: 'GET',
      params: {
        activity_uuid: meetingID
      }
    })
      .then(({ data }) => {
        const { cards } = data;
        setBrainstormCards(cards);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      })
  }, []);

  const addCard = () => {
    const brainstormURL = `${API_URL}/meetings/brainstorm/`;

    BridgeWebAPI.post(
      { Authorization: `JWT ${token}`},
      brainstormURL,
      { content, 'activity_uuid': meetingID}
    ).then(({ data }) => {
      // TODO potentially just do this on the backend
      const { brainstorm_cards } = data;
      setBrainstormCards(brainstorm_cards);
      setLoading(false);
      setContent('');
    }).catch((error) => {
      setLoading(false);
    });
  };
  const disableCardSubmission = !content
  const cardText = (disableCardSubmission) ? "Enter a value" : "Add Card";
  return (
    <div>
      <h2> Brainstorm Activity </h2>
      { brainstormCards && (
          <BoxContainerStyled >
              {
                  brainstormCards.map(({content}) => (
                      <BoxItemStyled key={`${content}`}>
                      <p> {`${content}`}</p>
                      </BoxItemStyled>
                  ))
              }
          <BoxItemStyled>
          <textarea value={content} onChange={(e)=> setContent({content: e.target.value})} />
          <Button disabled={disableCardSubmission} onClick={()=> addCard()} text={cardText} />
          </BoxItemStyled>
      </BoxContainerStyled>
      )
      }
      <Loader loading={isLoading} />
      <Button onClick={()=> history.push(nextURL)} text="Continue" />
    </div>
  )
}

const mapStateToProps = ({
  reducer: {
    user: {
      token,
    },
  },
}) => ({
  token,
});

export default connect(
  mapStateToProps,
  null,
)(MeetingBrainstorm);