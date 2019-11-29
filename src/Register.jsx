import React, { Component, Fragment } from "react";

class Register extends Component {

    render(){
        return(
            <Fragment>
            <h1> Register View</h1>
            <form>
                <input name="first-name" />
                <input name="last-name" />
            </form>
            </Fragment>
        )
    }

}

export default Register;