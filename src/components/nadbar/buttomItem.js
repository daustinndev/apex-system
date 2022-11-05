import react from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

export const ButtomItem = ({
  to,
  onClick,
  UrlImgProfile,
  UrlImg,
  Text,
  ClasName,
  Active,
  title,
  disabled
}) => {
  return (
    <>
      <div >
        {to ?
          <Link to={to}>
            <ButtonBtn
              title={title}
              Active={Active}
              ClasName={ClasName}
              onClick={onClick}
              disabled={disabled && true}
              Disabled={disabled}
            >
              <Icon UrlImgProfile={UrlImgProfile} >
                {UrlImg && <img src={'/apex-icons/' + UrlImg + '.png'} alt={Text} />}
                {UrlImgProfile && <img src={UrlImgProfile} alt={Text} />}
              </Icon>
              <SpanText>
                {Text}
              </SpanText>
            </ButtonBtn>
          </Link>
          :
          <ButtonBtn
            title={title}
            Active={Active}
            ClasName={ClasName}
            onClick={onClick}
            disabled={disabled && true}
            Disabled={disabled}
          >
            <Icon UrlImgProfile={UrlImgProfile} >
              {UrlImg && <img src={'/apex-icons/' + UrlImg + '.png'} alt={Text} />}
              {UrlImgProfile && <img src={UrlImgProfile} alt={Text} />}
            </Icon>
            <SpanText>
              {Text}
            </SpanText>
          </ButtonBtn>
        }

      </div>
    </>
  )
}

const ButtonBtn = styled.button`
    display: flex;
    align-items: center;
    background-color: ${props => props.Active ? 'var(--black-500)' : 'transparent'};
    border-radius: 5px;
    width: 100%;
    border: transparent;
    cursor: ${props => props.Disabled ? 'default' : 'pointer'};
    padding: 6px 7px;
    transition: .2s;
    &:hover{
      background-color: ${props => props.Disabled ? 'transparent' : 'var(--black-500)'} ;
    }
`
const Icon = styled.div`
    min-width: 30px;
    max-width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: ${props => props.UrlImgProfile ? '50%' : '0'};
    border:${props => props.UrlImgProfile ? '1px  solid var(--black-600)' : '0'};
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 100%;
      height: auto;
    }
`
const SpanText = styled.span`
  color: var(--write-200);
  font-size: var(--size-14);
  margin-left: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;

`
