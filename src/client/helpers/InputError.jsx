import React from "react";
import styled from '@emotion/styled';

const InputErrorStyled = styled.div`

.input-error{
    color: red;
    font-size: 12px;
}

`;


const InputError = ({text}) => {

    return(
        <InputErrorStyled>
        { text &&
            <div className="input-error">{text}</div>
        }
        </InputErrorStyled>
    )
}

export default InputError;