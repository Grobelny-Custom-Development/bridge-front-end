
import React, { useState } from "react";
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 8px 16px;
  border: none;
  background: #6bd063;
  color: #f2f2f2;
  max-width: 100%;
  width: ${props => props.width ? (props.width) : '400px'};
  height: 50px;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  border-radius: 2px;
  &.is-disabled{
    opacity: .5;
  }
`;


const Button = (props) => {
  const {
    type, disabled,
    onClick, text, primary,
    tag, link, maxWidth,
  } = props;
  const [isBusy, setIsBusy] = useState(false);
  const onButtonClick = () => {
    if (onClick) {
      setIsBusy(true);
      Promise.resolve(onClick())
        .then(() => setIsBusy(false))
        .catch(() => setIsBusy(false));
    }
  };
  const buttonDisabled = (isBusy || disabled)? true : false;
  return (
    <StyledButton
      type={type}
      onClick={onButtonClick}
      primary={primary}
      as={tag}
      href={link}
      maxWidth={maxWidth}
      disabled={buttonDisabled}
      className={`${buttonDisabled ? 'is-disabled' : ''}`.trim()}
    >
      <span>{text}</span>
    </StyledButton>
  );
}

export default Button;