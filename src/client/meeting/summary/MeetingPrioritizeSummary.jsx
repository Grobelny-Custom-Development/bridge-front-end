
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import BridgeWebAPI from '../../helpers/api.js';
import Button from '../../bridge-components/Button.jsx';

class MeetingPrioritizeSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
          prioritizedCards: null,
          isLoading: false,
        }
      }
    componentDidMount(){
        const { token, match } = this.props;
        const {  params : { meetingID }} = match;
        BridgeWebAPI.request({
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `JWT ${token}`
              },
            url: `${API_URL}/meetings/prioritization/`,
            method: 'GET',
            params: {
                activity_uuid: meetingID
            }
        }).then(({data}) => {
            const { brainstorm_cards } = data;
            this.setState({ prioritizedCards: brainstorm_cards})
        }).catch((error) => {

          console.log(error)
        }
        
        )

    }


    render(){
      const { match, history } = this.props;
      const {  params : { meetingID }} = match;
      const { prioritizedCards } = this.state;
      const displayPrioritizedCards =  !!( prioritizedCards && prioritizedCards.length > 0)
      console.log(prioritizedCards)
        return(
            <Fragment>
            <h1> Prioritization Summary</h1>
            { displayPrioritizedCards && prioritizedCards.map( ({content}) =>(
                <p>{content}</p>
            ))
            }
            <Button onClick={()=> history.push(`/meeting/activity/${meetingID}/forcedrank`)} text="Next" />
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