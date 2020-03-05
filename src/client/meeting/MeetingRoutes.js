
import MeetingCreate from './create/MeetingCreate.jsx';
import MeetingActive from './MeetingActive.jsx';

import MeetingPreview from './create/MeetingPreview.jsx';

// Activity Components
import MeetingBrainstorm from './MeetingBrainstorm.jsx';
import MeetingPrioritize from './ranking/MeetingPrioritize.jsx';
import MeetingForcedRank from './ranking/MeetingForcedRank.jsx';
import MeetingBucketing from './grouping/MeetingBucketing.jsx';


// Summary Components 
import MeetingPrioritizeSummary from './summary/MeetingPrioritizeSummary.jsx';
import MeetingBrainstormSummary from './summary/MeetingBrainstormSummary.jsx';
import MeetingForcedRankSummary from './summary/MeetingForcedRankSummary.jsx';

export default [
  {
    path: '/meeting/create/',
    component: MeetingCreate,
    exact: true,
  },
  {
    path: '/meeting/active/',
    component: MeetingActive,
    exact: true,
  },

  {
    path: '/meeting/preview/:meetingID/',
    component: MeetingPreview,
    exact: true,
  },
  {
    path: '/meeting/activity/:meetingID/brainstorm/',
    component: MeetingBrainstorm,
    exact: true,
  },
  {
    path: '/meeting/activity/:meetingID/brainstorm/summary',
    component: MeetingBrainstormSummary,
  },
  {
    path: '/meeting/activity/:meetingID/prioritization/',
    component: MeetingPrioritize,
    exact: true,
  },
  {
    path: '/meeting/activity/:meetingID/prioritization/summary',
    component: MeetingPrioritizeSummary,
  },
  {
    path: '/meeting/activity/:meetingID/forcedrank',
    component: MeetingForcedRank,
  },
  {
    path: '/meeting/activity/:meetingID/forcedrank/summary',
    component: MeetingForcedRankSummary,
  },
  {
    path: '/meeting/activity/:meetingID/bucketing/',
    component: MeetingBucketing,
  },
];
