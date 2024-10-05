import styled from 'styled-components';

export const InputContainer = styled.article`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-bottom: 0.3rem;
`;

export const Label = styled.label`
    font-size: 14px;
    cursor: pointer;
    color: var(--black);
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const InputStyled = styled.input`
    width: 100%;
    height: 32px;
    padding-left: 10px;
    border: 1px solid var(--black);
    border-radius: 8px;
    font-size: 12px;
    outline: none;
    color: var(--black);
    box-sizing: border-box; 
`;