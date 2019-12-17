import React, { Component, Fragment } from "react";
import axios from 'axios';
import S from '../formStyles.js'



const MeetingBrainstorm = () => {
    return(
        <Fragment>
            <h1> Brainstorm Activity </h1>
            <textarea rows="4" cols="50">
            </textarea>
            <S.ListElement>
                <button type="submit"> Add Card </button>
            </S.ListElement>
        </Fragment>
    )
}

export default MeetingBrainstorm;