import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    margin-bottom: 50px;
    @media screen and ( max-width: 992px ) {
        width: 60%;
        margin-left: 10px;
        margin-right: 10px;
    }
    @media screen and ( max-width: 768px ) {
        width: 100%;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;

export const TextWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const AuthorNamesContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
`;

export const IconWrapper = styled.div`
    width: 30%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;

export const ImageWrapper = styled.div`
    margin-bottom: 40px;
    display:flex;
    position:relative;
    
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-height:350px;
    }
`;

export const Paragraph = styled.div`
    width: 100%;
    height: fit-content;

    p {
        letter-spacing: -.0104166667em;
        font-size: 1.1875rem;
        line-height: 1.9375rem;
        color: #282828;
        margin-bottom:32px;
    }
`;

export const P = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const ArticleType = styled.span`
    font-size: 14px;
    text-transform: ${(props) => (props.lowercase ? 'none' : 'uppercase')};
    color: #0787B1;
    font-weight: 400;
    margin-bottom: 10px;
    margin-left: 2px;
    margin-right: 2px;
    & >a:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    &>a{
        color:inherit;
        margin-right:10px;
    }

    &>a:hover{
        text-decoration:none;
    }
`;
