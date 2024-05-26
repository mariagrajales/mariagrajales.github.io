// atoms/Label.jsx
import styled from "styled-components";

const LabelStyled = styled.label`
  font-weight: 400;
  font-size: 16px;
`;

function Label(props) {
    return <LabelStyled>{props.text}</LabelStyled>;
}

export default Label;
