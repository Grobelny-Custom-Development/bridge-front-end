import React, { Component, Fragment } from "react";
import axios from 'axios';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import S from '../formStyles.js'

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Container from './Container.jsx'

const ListContainerStyled = styled.ul`
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding: 0;
`;

class MeetingPrioritize extends Component {
    constructor(props) {
        super(props);
        this.state = {
          brainstormCards: null,
          content: null,
          isLoading: false,
        }
      }

    componentDidMount(){
        const { match, token } = this.props;
        const {  params : { meetingID }} = match;

        this.setState({ isLoading: true})
        axios({
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              Authorization: `JWT ${token}`
            },
            url: `${API_URL}/meetings/prioritization/`,
            method: 'GET',
            params: {
                meeting_uuid: meetingID
            }
          })
        .then(({data}) => {
            const { cards } = data;
            this.setState({ activeCards: cards})
            this.setState({ isLoading: false})
        })
        .catch((error) => {
            console.log(error);
            this.setState({ isLoading: false})
        });
    }
    render(){
        const { activeCards, isLoading } = this.state;
        const { history } = this.props;
        const displayActiveCards = (activeCards && activeCards.length > 0)
        return(
            <Fragment>
            <h2> Prioritization Activity </h2>
            <p> Drag and drop the cards in order of highest (top) and the least (bottom) priority.</p>
            { displayActiveCards &&
            <ListContainerStyled>
                <DndProvider backend={Backend}>
                    <Container activeCards={activeCards} />
                </DndProvider>
            </ListContainerStyled>
            }
            <S.ButtonElement onClick={()=> history.push("/")}> Next </S.ButtonElement>
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
)(MeetingPrioritize);



{/* <h2> Prioritization Activity </h2>
<p> Drag and drop the cards in order of highest (top) and the least (bottom) priority.</p>

{ displayActiveCards  && (
 <ListContainerStyled>
     <DragSortableList items={ activeCards }
    //     activeCards.map(({content}) => (
    //         <ListItemStyled key={`${content}`}> {`${content}`} </ListItemStyled>
    //     ))
    // }  
    placeholder={'hello'} onSort={ ()=> this.setState({})} dropBackTransitionDuration={0.3} type="vertical"/>

</ListContainerStyled>
)
}
{
isLoading && (
    <h3> Loading ...</h3>
)
}
<S.ButtonElement onClick={()=> history.push("/")}> Next </S.ButtonElement> */}