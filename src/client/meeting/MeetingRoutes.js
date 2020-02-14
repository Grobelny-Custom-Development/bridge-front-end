

import MeetingCreate from './create/MeetingCreate.jsx';
import MeetingActive from './MeetingActive.jsx';
import MeetingBrainstorm from './MeetingBrainstorm.jsx';
import MeetingPreview from './create/MeetingPreview.jsx';
import MeetingPrioritize from './MeetingPrioritize.jsx';
import MeetingPrioritizeSummary from './MeetingPrioritizeSummary.jsx';
import MeetingBrainstormSummary from './MeetingBrainstormSummary.jsx';
import MeetingForcedRank from './MeetingForcedRank.jsx';


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
]