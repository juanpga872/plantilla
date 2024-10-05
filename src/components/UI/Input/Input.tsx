import React from "react";
import { InputContainer, Label, InputStyled, InputWrapper } from "./Input-style";
import { IInput } from "../../../types/IInput";


const Input: React.FC<IInput> = ({ label, type, placeholder, required, id, value, onChange, name, key, maxLength }) => {
    return (
        <InputContainer key={key}>
            <Label htmlFor={id}>{label}</Label>
            <InputWrapper>
                <InputStyled 
                    type={type} 
                    placeholder={placeholder}
                    id={id} 
                    value={value} 
                    name = {name}
                    maxLength={maxLength}                    
                    onChange={onChange} 
                    {...(required && { required })}
                />
            </InputWrapper>
        </InputContainer>
    );
}

export default Input;