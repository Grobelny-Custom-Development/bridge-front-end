import React, { Component } from 'react';
import { css, jsx } from '@emotion/core';
import axios from 'axios';



class Profile extends Component {
    async componentDidMount(){
        console.log('in mount')
        localStorage.getItem('token');
        try {
           const response = await axios({
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                },
                url: 'http://localhost:8000/users/user/',
                method: 'GET',
              })
            console.log(response)
        } catch (e) {
            console.log(e);
        }
        }
      render(){
          return(
            <h2>Profile</h2>
          )
      }
  }
  
  export default Profile;