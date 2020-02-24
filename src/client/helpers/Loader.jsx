import React from "react";


const Loader = ({loading}) => {

    return(
        <>
        {
            loading && 
                <h3> Loading ...</h3>
        }
        </>
    )
}

export default Loader;