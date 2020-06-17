import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 70%;
    height: fit-content;
    margin-left: 200px;
    margin-top: 30px;

    @media screen and ( max-width: 992px ) {
        width: 100%;
        margin-left: 0px;
        padding-left:10px;
    }
`;

export const Row = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 50px;
    margin-top: 10px;
    @media screen and ( max-width: 992px ) {
        margin-left:  10px;
        width: 98%;
        align-items: center;
    }
    @media screen and ( max-width: 768px ) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 95%;
    
}
`;
