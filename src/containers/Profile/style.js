import styled from 'styled-components';
import ReactImageFallback from 'react-image-fallback';
import Select from 'react-select';


export const ProfileContainer = styled.div`
    display:block;
    margin:auto;
    max-width:1000px;
    width:100%;
    margin-top:100px;
`;


export const HeadingStyled = styled.h1`
    font-size:18px;
    padding-left:10px;
    font-weight:400;
`;


export const ImageContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:20px;

`;

export const ImageStyled = styled(ReactImageFallback)`
    with:60px;
    height:60px;
    object-fit:contain;
`;

export const DetailsContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

export const RowContainer = styled.div`
    flex: 0 50%;
    display:flex;
    padding-left:10px;
    padding-right:10px;
`;

export const RowContainerWithDesc = styled.div`
    flex: 0 50%;
    display:flex;
    padding-left:10px;
    padding-right:10px;
    flex-direction:column;

    & >p{
        margin-left:33%;
        color: #888;
        cursor: auto;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }
    & > div{
        display:flex;
    }
`;


export const LabelStyled = styled.label`
    width:33%;
    text-transform:uppercase;
    color: #4d4c4c;
    cursor: pointer;
    font-size: .875rem;
    font-weight: 400;
    margin-bottom: 0;
    padding-left:5px;
    padding-right:5px;
`;

export const InputStyled = styled.input`
    border-radius: 0;
    background-color: #fff;
    border-style: solid;
    border-width: 1px;
    border-color: #ccc;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: rgba(0,0,0,.75);
    font-family: inherit;
    font-size: .875rem;
    height: 2.3125rem;
    margin: 0 0 1rem 0;
    padding: .5rem;
    width:67%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: border-color .15s linear,background .15s linear;
    transition: border-color .15s linear,background .15s linear;
`;

export const TextareaStyled = styled.textarea`
    border-radius: 0;
    background-color: #fff;
    resize: none;
    border-style: solid;
    border-width: 1px;
    border-color: #ccc;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: rgba(0,0,0,.75);
    font-family: inherit;
    font-size: .875rem;
    height: 2.3125rem;
    margin: 0 0 1rem 0;
    padding: .5rem;
    width:67%;
    height:70px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: border-color .15s linear,background .15s linear;
    transition: border-color .15s linear,background .15s linear;
`;

export const GenderSelectStyled = styled(Select)`
    width:67%;
`;
