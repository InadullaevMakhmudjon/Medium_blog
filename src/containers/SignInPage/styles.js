import styled, { keyframes } from 'styled-components';

import { Link } from 'react-router-dom';

const spin = keyframes`
    from {
        transform: translateY(-50%) rotate(0deg);
    }
    to {
        transform: translateY(-50%) rotate(360deg);
    }
`;

export const StyledSignUpPage = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background-color: #EFF0F0;
`;

export const FormStyled = styled.div`
    width: 100%;
    margin-top: 50px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`;

export const PhoneInputWrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-bottom:10px;


    & .react-tel-input .form-control{
        width: 350px;
        height: 40px;
        border: 1px solid #CCCCCC;
        margin-top: 4px;
        margin-bottom: 10px;
        border-radius:0px;
    }
`;

export const LabelStyled = styled.label`
    font-weight:600;

    ${({ error }) => error && `
        color:red;
        text-align:left;
        font-weight:400;
        margin-bottom:10px;
    `}
`;

export const InputWrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-bottom:10px;
`;

export const Input = styled.input`
    width: 350px;
    height: 40px;
    border: 1px solid #CCCCCC;
    margin-bottom: 10px;
    padding: 5px 10px;

    &::placeholder {
        font-size: 14px;
        color: #CCCCCC;
        font-weight: 400;
        line-height: normal;
        text-indent: 10px;
    }
    &:hover {
        border-color: #CCCCCC;
        cursor: pointer;
    }
`;

export const TextWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

export const SignInLink = styled(Link)`
    color: #77D89E;
    font-weight: 500;
    &:hover {
        cursor: pointer;
        text-decoration: none;
        color: #77D89E;
    }
`;

export const Heading = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    @media screen and ( max-width: 710px ) {
        font-size: 20px;
        line-height: 30px;
    }
`;

export const ForgotPasswordLink = styled(Link)`
    font-size: 16px;
    font-weight: 400;
    color: #444;
    margin-top: 30px;
    &:hover {
        cursor: pointer;
        text-decoration: none;
        color: #444;
        opacity:0.7;
    }
`;

export const ButtonStyled = styled.button`
    width: 350px;
    height: 38px;
    background: #111;
    color:#fff;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    border: none;
    opacity: 100%;
    outline: none;
    color: white;
    border-radius: 3px;
    position:relative;

    span {
        position: absolute;
        right: 10px;
        top: 50%;
        height: 15px;
        width: 15px;
        background-color: transparent;
        box-sizing: border-box;
        opacity: 1;
        border-radius: 50%;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        border-right: 2px solid rgba(#fff, 0.35);
        transition: all 0.5s ease;
        animation-name: ${spin};
        animation-duration: 0.75s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
`;

export const HaveAccountContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-top:20px;

    a{
        margin-left:10px;
    }
`;
