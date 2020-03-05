import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend'
import styled from '@emotion/styled';
import BridgeWebAPI from '../../helpers/api.js';


import GroupingContainer from "./GroupingContainer.jsx";



class MeetingBucketing extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeCards: null,
          isLoading: false,
          activeBuckets: [],
        }
      }
    componentDidMount(){
        const { token, match } = this.props;
        const {  params : { meetingID }} = match;
        // TODO:: Figure out if want to consolidate this
        BridgeWebAPI.request({
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `JWT ${token}`
              },
            url: `${API_URL}/meetings/card/active/`,
            method: 'GET',
            params: {
                meeting_uuid: meetingID
            }
        }).then(({data}) => {
            const {cards } = data;
            this.setState({ activeCards: cards})
        })
        BridgeWebAPI.request({
          headers: {
              'X-Requested-With': 'XMLHttpRequest',
              Authorization: `JWT ${token}`
            },
          url: `${API_URL}/activity/bucketing/`,
          method: 'GET',
          params: {
              meeting_uuid: meetingID
          }
      }).then(({data}) => {
          const {buckets } = data;
          this.setState({ activeBuckets: buckets})
      })

    }

    completeActivity = (droppedSubmission) => {
      const { match, history, token } = this.props;
      const {  params : { meetingID }} = match;
      const postData = {'submission': droppedSubmission, 'meeting_uuid': meetingID};
      BridgeWebAPI.request({
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `JWT ${token}`
          },
        url: `${API_URL}/activity/bucketing/`,
        method: 'POST',
        data: postData,
    }).then(({data}) => {
      history.push(`/meeting/activity/${meetingID}/bucketing/summary/`)
    })
    }

    render(){
        const { activeCards, activeBuckets } = this.state;
        const displayActiveCards =  !!( activeCards && activeCards.length > 0)
        return(
            <Fragment>
            <h1> Bucketing Activity </h1>
            
            { displayActiveCards && 
              <DndProvider backend={Backend}>
                <GroupingContainer activeCards={activeCards} activeBuckets={activeBuckets} completeActivity={this.completeActivity} />
              </DndProvider>
            }

        </Fragment>
        )

    }
}

const mapStateToProps = ({
    reducer: {
        user: {
          token,
        },
      }
  }) => ({
    token
  });

export default connect(
    mapStateToProps,
    null,
)(MeetingBucketing);