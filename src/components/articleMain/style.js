import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: ${(props) => (props.paddingLeft100 ? '100px' : '0px')};
    border-bottom: ${(props) => (props.hrHide ? 'none' : '1px solid #D5D7D8')};
    @media screen and ( max-width: 800px ) {
        padding-left: 10px;
    }
    h1 {
        font-size: ${(props) => (props.big ? '23px' : '21px')};
        font-weight: 1000;
        line-height: 25px;
        margin-bottom: 10px;
        @media screen and ( max-width: 768px ) {
        font-size: 18px;
        }
            &:hover {
                cursor: pointer;
                opacity: 0.5;
            }
        }
    h2 {
        font-size: 14px;
        text-transform: uppercase;
        color: #0787B1;
        font-weight: 400;
        @media screen and ( max-width: 768px ) {
        font-size: 12px;
        }
        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
    }

    h2 >a{
        color: #0787B1;
    }
    h3 {
        font-size: 14px;
        text-transform: uppercase;
        margin-left: 4px;
        font-weight: 400;
        @media screen and ( max-width: 768px ) {
        font-size: 12px;
        }
    }
    h4 {
        font-size: 14px;
        margin-left: 4px;
        font-weight: 600;
        color: ${(props) => (props.authorNameBlack ? 'black' : '#888888')};
        @media screen and ( max-width: 768px ) {
        font-size: 12px;
        }
    }
    h5 {
        display: ${(props) => (props.secondaryTextHide ? 'none' : 'block')};
        font-size: 14px;
        font-weight: 600;
        @media screen and ( max-width: 768px ) {
        font-size: 14px;
        }
    }
    content {
        display: ${(props) => (props.imageHide ? 'none' : 'block')};
        img {
            width: 250px;
            height: 140px;
            @media screen and ( max-width: 991px ) {
                width: 200px;
                height: 110px;
            }
            @media screen and ( max-width: 768px ) {
                width: 180px;
                height: 100px;
            }
            @media screen and ( max-width: 500px ) {
                width: 170px;
                height: 90px;
            }
            @media screen and ( max-width: 321px ) {
                width: 100px;
                height: 60px;
            }
        }
    }


    a{
       color: #212529;
       text-decoration:none;
    }

    img {
        display: ${(props) => (props.imageHide ? 'none' : 'block')};
        width: ${(props) => (props.imageHide ? '0px' : '250px')};
        height: 140px;
        @media screen and ( max-width: 991px ) {
            width: 200px;
            height: 110px;
        }
        @media screen and ( max-width: 768px ) {
            width: 180px;
            height: 100px;
        }
        @media screen and ( max-width: 500px ) {
            width: 170px;
            height: 90px;
        }
        @media screen and ( max-width: 321px ) {
            width: 100px;
            height: 60px;
        }
    }
`;

export const Col1 = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width:600px;
    width:100%;
`;

export const TextWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ButtonsWrapper = styled.div`
    width: 70px;
    height: fit-content;
    display: ${(props) => (props.buttonsHide ? 'none' : 'flex')};
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 15px;
`;

export const DescribeStyled = styled.div`
    display: block;
    font-size: 14px;
`;
