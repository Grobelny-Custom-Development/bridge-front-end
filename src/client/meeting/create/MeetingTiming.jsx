import React, { Fragment } from "react";
import S from '../../formStyles.js'


const MeetingTiming = (props) => {

    const { startDate, setStartDate, isPublic, setPublic, isRecurring, setRecurring, setInterval} = props;
    console.log(`isPublic ${isPublic}`);
    console.log(`isRecurring ${isRecurring}`);
    return(
        <Fragment>
        <S.ListElement>
        <label htmlFor="public">Public ?</label>
        <S.FlexList>
            <li>
                <label htmlFor="yes"> Yes </label>
                <input
                type="radio"
                id="yes"
                checked={isPublic === true}
                onChange={(e) => setPublic(true)} 
                />
            </li>
            <li>
                <label htmlFor="no"> No </label>
                <input
                type="radio"
                id="no"
                checked={isPublic === false}
                onChange={(e) => setPublic(false)} 
                />
            </li>
        </S.FlexList>
    </S.ListElement>
    <S.ListElement>
        <label htmlFor="date">Start Date </label>
        <input
            type="date"
            name="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)} 
        />
    </S.ListElement>
    <S.ListElement>
        <label htmlFor="recurring">Recurring ?</label>
        <S.FlexList>
            <li>
                <label htmlFor="yes"> Yes </label>
                <input
                type="radio"
                id="yes"
                checked={isRecurring === true}
                onChange={(e) => setRecurring(true)} 
                />
            </li>
            <li>
                <label htmlFor="no"> No </label>
                <input
                type="radio"
                id="no"
                checked={isRecurring === false}
                onChange={(e) => setRecurring(false)} 
                />
            </li>
        </S.FlexList>
    </S.ListElement>
    { isRecurring &&
        <S.ListElement>
        <label htmlFor="Interval">How Often? </label>
        <select onChange={(e) => setInterval(e.target.value)}>
            <option value="Day">Daily</option>
            <option value="Month">Monthly</option>
            <option value="Week">Weekly</option>
            <option value="Year">Yearly</option>
        </select>
    </S.ListElement>
    }
    </Fragment>
    )
}

export default MeetingTiming;