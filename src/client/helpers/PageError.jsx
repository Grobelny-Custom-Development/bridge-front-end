import React from "react";
import styled from '@emotion/styled';

const PageErrorStyled = styled.div`

.active{
    background-color: red;
    color: white;
    line-height: 50px;
}

`;


const PageError = ({text}) => {

    return(
        <PageErrorStyled>
        { text &&
            <div className="active">{text}</div>
        }

        </PageErrorStyled>
    )
}

export default PageError;