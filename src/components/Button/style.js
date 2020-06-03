import styled from 'styled-components';


export const ButtonStyled = styled.button`
    background-color: #111;
    color: #fff;
    width: 151px;
    border-radius: 3px;
    font-size: .875rem;
    text-transform: capitalize;
    line-height: normal;
    margin: 0 0 1.25rem;
    position: relative;
    text-align: center;
    text-decoration: none;
    border-style: solid;
    border-width: 0;
    cursor: pointer;
    font-weight: 400;
    padding-top: .6875rem;
    padding-right: 1rem!important;
    padding-bottom: .625rem;
    padding-left: 1rem!important;
    white-space: nowrap;
    margin-right:10px;

    ${({ secondary }) => secondary && `
        background:#fff;
        color:#111;
        border:1px solid #111;
    `}

    &:hover{
        opacity:0.7
    }
`;
