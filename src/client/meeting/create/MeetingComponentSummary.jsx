import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const MeetingComponentSummary = (props) => {
    const { componentList } = props;
    return(
        <Fragment>
            { componentList.map((component) => (
                <p key={component.customName}>{`Name: ${component.agenda_item} Duration: ${component.duration} minutes Type: ${component.name}`}</p>
            ))
            }
        </Fragment>
    )

}

MeetingComponentSummary.propTypes = {
    componentList: PropTypes.array
};

MeetingComponentSummary.defaultProps = {
    componentList: []
  };



export default MeetingComponentSummary;