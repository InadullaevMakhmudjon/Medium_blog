import styled from 'styled-components';
import ReactImageFallback from 'react-image-fallback';

export const UserAreaContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    cursor: pointer;
    margin-left:10px;
`;


export const UserAvatarContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: 2px solid #fff;
    box-shadow: 0px 0px 12px -5px #000;

`;

export const ReactImageStyled = styled(ReactImageFallback)`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  margin:0px;
`;

export const DropDownList = styled.div`
    &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        margin-left: -0.5em;
        right: 0px;
        box-sizing: border-box;
        border: 7px solid black;
        border-color: transparent transparent #ffffff #ffffff;
        transform-origin: 0 0;
        transform: rotate(135deg);
        box-shadow: -3px 3px 3px -3px rgba(214, 214, 214, 0.78);
    }


    display: ${({ active }) => (active ? 'block' : 'none')};
    position: absolute;
    border-radius: 7px;
    background: #fff;
    box-shadow: 0px 0px 8px rgba(214, 214, 214, 0.78);
    list-style: none;
    padding: 0 20px;
    width: 150px;
    margin: 0;
    top: 70px;
    right: -9%;

    li {
        padding: 0px;
        line-height: 47px;
        border-bottom: 1px solid rgba(215, 215, 215, 0.17);
        &:last-child {
        border-bottom: 0px;
    }
        a {
          font-size: 13px;
          padding: 15px 25px 16px 10px;
          text-decoration: none;
          color: #212529;
          transition: all .2s ease-out;
        }
      }
      span {
        background: #16d67a;
        padding: 3px 10px;
        color: #fff;
        border-radius: 30px;
        font-size: 13px;
      }
       li {
        &:before {
          content: '';
          width: 0px;
          height: 40px;
          position: absolute;
          background: #212529;
          margin-top: 4px;
          border-radius: 0 1px 1px 0;
          left: 0px;
          transition: all .2s ease;
        }
        &:hover:before {
          width: 5px;
          border-radius:30px;
        }
        a:hover {
          margin-left: 5px;
        }
      }
`;
