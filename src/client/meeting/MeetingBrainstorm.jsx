import React, { Component, Fragment } from "react";
import axios from 'axios';
import S from '../formStyles.js'



const MeetingBrainstorm = () => {
    return(
        <Fragment>
            <h1> Brainstorm Activity </h1>
            <textarea rows="4" cols="50">
            </textarea>
            <S.ButtonElement type="submit"> Add Card </S.ButtonElement>
        </Fragment>
    )
}

export default MeetingBrainstorm;