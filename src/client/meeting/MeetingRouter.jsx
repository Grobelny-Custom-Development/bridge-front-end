import React from "react";
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { renderRoutes } from "react-router-config";
import ActivityProgress from "./ActivityProgress.jsx";
import ParticipantProgress from "./ParticipantProgress.jsx";

const MeetingStyled = styled.div`
    display:flex;
    flex-direction:row;
`;

const MeetingRouter = ({ route, components, participants, match }) => {
  const {  params : { meetingID, category }} = match;
  const nextActivity = (components)? components[components.findIndex(component => component.activity_uuid == meetingID)+1] : null;
  const nextURL = (nextActivity) ? `/meeting/activity/${nextActivity.activity_uuid}/${nextActivity.activity_type}`: '';
  const display = (category === "activity" ) ? true : false;
  return (
    <MeetingStyled>
      <div>
        <ActivityProgress components={components} display={display} />
        <ParticipantProgress participants={participants} display={display} />
      </div>
      <div>
        {renderRoutes(route.routes, { nextURL })}
      </div>
    </MeetingStyled>
  )
}

const mapStateToProps = ({
  reducer: {
    user: {
      token,
    },
    activity: {
      components,
      participants,
    },
  }
}) => ({
  token,
  components,
  participants
});

export default connect(
  mapStateToProps,
  null,
)(MeetingRouter);