
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import request from '../../helpers/api.js';
import S from '../../formStyles.js'

class MeetingPrioritizeSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeCards: null,
          prioritizedCards: null,
          isLoading: false,
        }
      }
    componentDidMount(){
        const { token, match } = this.props;
        const {  params : { meetingID }} = match;
        request({
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `JWT ${token}`
              },
            url: `${API_URL}/meetings/prioritization/`,
            method: 'GET',
            params: {
                meeting_uuid: meetingID
            }
        }).then((data) => {
            const { brainstorm_cards } = data;
            this.setState({ prioritizedCards: brainstorm_cards})
        })

    }


    render(){
      const { match, history } = this.props;
      const {  params : { meetingID }} = match;
        const { prioritizedCards } = this.state;
        const displayPrioritizedCards =  !!( prioritizedCards && prioritizedCards.length > 0)
        return(
            <Fragment>
            <h1> Prioritization Summary</h1>
            { displayPrioritizedCards && prioritizedCards.map( ({content}) =>(
                <p>{content}</p>
            ))
            }
            <S.ButtonElement onClick={()=> history.push(`/meeting/activity/${meetingID}/forcedrank`)}> Next </S.ButtonElement>
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
)(MeetingPrioritizeSummary);