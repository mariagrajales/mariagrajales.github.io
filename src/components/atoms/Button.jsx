import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 80%;
    height: 8vh;
    background-color: #0308a3;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;

    &:hover {
        background-color: #5257de;
    }
`;

function Button(){
    return(
        <ButtonStyled>Guardar</ButtonStyled>
    )
}

export default Button;