import React, { Fragment } from "react";


const MeetingComponentSummary = (props) => {
    const { componentList } = props;
    return(
        <Fragment>
        { componentList && 
            <Fragment>
                { componentList.map((component) => (
                    <p>{component.name}</p>
                ))
                }
            </Fragment>
        }
        </Fragment>
    )

}

export default MeetingComponentSummary;