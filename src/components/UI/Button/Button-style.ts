import styled from "styled-components";

export const ButtonStyle = styled.button`
    width: 300px;
    background-color: var(--black);
    color: var(--white);
    font-weight: bold;
    padding: 5px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        background-color: var(--grey);
    }
`