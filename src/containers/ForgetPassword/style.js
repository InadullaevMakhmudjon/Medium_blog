import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from {
        transform: translateY(-50%) rotate(0deg);
    }
    to {
        transform: translateY(-50%) rotate(360deg);
    }
`;
export const ForgotPasswordContainer = styled.div`
    display:flex;
    margin:auto;
    flex-direction:column;
    align-items:center;
    background-color:#EFF0F0l;
    margin-top:50px;
    margin-bottom:50px;
`;

export const HeaderStyled = styled.h1`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const DescriptionStyled = styled.p`
    font-size:16px;
    color:#999;
    margin-bottom:10px;
`;


export const InputWrapper = styled.div`
    width:350px;
    align-items:flex-start;
    display: flex;
    flex-direction: column;
    margin-bottom:20px;

    & .react-tel-input .form-control{
        width:100%;
      
    }

`;


export const LabelStyled = styled.label`
    font-weight: 600;
`;

export const InputStyled = styled.input`
    width: 350px;
    height: 40px;
    border: 1px solid #CCCCCC;
    margin-bottom: 10px;
    padding: 5px 10px;
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

    :disabled{
        cursor:not-allowed;
        opacity:0.7;
    }

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


export const ResendButtonStyled = styled.button`
    
`;
