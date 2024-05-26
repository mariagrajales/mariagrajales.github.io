import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  border: 1px gray solid;
  border-radius: 5px;
  font-size: 16px;
  color: black;
  padding: 0 10px;
`;

function Input(props) {
    return (
        <InputStyled
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
        />
    );
}

export default Input;
