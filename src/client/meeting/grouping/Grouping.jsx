import React, { Fragment } from "react";
import Button from '../../bridge-components/Button.jsx';


const Grouping = (props) => {

    const { history, nextURL } = props;

    return(
        <Fragment>
            <h1>Grouping</h1>
            <p> Grouping PlaceHolder</p>
            <Button onClick={()=> history.push(nextURL)} text="Next" />
        </Fragment>
    )
}

export default Grouping;