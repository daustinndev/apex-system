import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Loader } from '../loading';
import { Link } from 'react-router-dom';






export const ButtomCircle = ({
  icon,
  IconImg,
  onClick,
  text,
  urlImg,
  styled,
  title
}) => {
  return (
    <>
      <ButonCircleContainer style={styled}>
        <Button urlImg={urlImg} text={text} onClick={onClick && onClick}>
          {icon && <FontAwesomeIcon icon={icon} />}
          {IconImg && <IconImg url={urlImg} width='40px' />}
          {text && <span>{text}</span>}
        </Button>
        {title &&
          <TitleAbsolute className='snap'>
            {title}
          </TitleAbsolute>
        }
      </ButonCircleContainer>
    </>
  )
}
const TitleAbsolute = styled.div`
  position: absolute;
  background-color: var(--black-500);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  line-height: 19px;
  padding: 3px 8px;
  overflow: hidden;
  transition-delay: .2s;
  top: 40px;
  right: 0;
  transform: translateY(-1000px);
  /* display: none; */
  color: var(--write-500);
  font-size: var(--size-13);
  word-wrap: normal;
  cursor: default;
  &:hover{
    transform: translateY(-100px) !important;
  }
`
const ButonCircleContainer = styled.div`
  position: relative;
  &:hover .snap{
    transform: translateY(0);
  }
`
const Button = styled.div`
  background-color: var(--black-800);
  /* border: 1px solid var(--black-700); */
  border-radius: 20px;
  min-width: 30px;
  max-width: 30px;
  height: 30px;
  min-height: 30px;
  max-height: 30px;
  color: #e7e9ed;
  cursor: pointer;
  transition: background-color .1s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.urlImg ? '0' : '0 8px'};
  &:hover{
    background-color: var(--black-700);
    border: 1px solid var(--black-700);
  }
  svg{
    font-size: 16px;
  }
  span{
    padding: 0 .3rem;
    font-size: var(--size-12);
    font-weight: bold;
  }
`







export const ButtonPrimary = ({
  onClick,
  icon,
  children,
  urlImg,
  IconImg,
  iconImgHref,
  ClasName,
  ColorText,
  loading,
  disabled,
  iconColor,
  title,
  type,
  onDoubleClick,
  href
}) => {
  return (
    <>
      <ButonContainer ColorText={ColorText}>
        {href ?
          <Link to={href}>
            {IconImg && <IconImgDiv><a href={iconImgHref}><img src={IconImg} alt={IconImg} /></a></IconImgDiv>}
            <Button2 iconImg={IconImg} onDoubleClick={onDoubleClick} type={type} disabled={disabled ? true : loading ? true : false} className={ClasName} onClick={onClick}>
              {
                loading ?
                  <IframeLoder>
                    <Loader />
                  </IframeLoder>
                  :
                  <>
                    {icon && <IconBtn iconColor={iconColor}><FontAwesomeIcon icon={icon} /></IconBtn>}
                    {children && <span>{children}</span>}
                  </>
              }
            </Button2>
          </Link>
          :
          <>
            {IconImg && <IconImgDiv><a href={iconImgHref}><img src={IconImg} alt={IconImg} /></a></IconImgDiv>}
            <Button2 iconImg={IconImg} onDoubleClick={onDoubleClick} type={type} disabled={disabled ? true : loading ? true : false} className={ClasName} onClick={onClick}>
              {
                loading ?
                  <IframeLoder>
                    <Loader />
                  </IframeLoder>
                  :
                  <>
                    {icon && <IconBtn iconColor={iconColor}><FontAwesomeIcon icon={icon} /></IconBtn>}
                    {children && <span>{children}</span>}
                  </>
              }
            </Button2>
          </>
        }

      </ButonContainer>
    </>
  )
}
const IconImgDiv = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 7px;
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    a{
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
    }
`
const IframeLoder = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  padding: 2px 0;
  align-items: center;
`
const ButonContainer = styled.div`
  
  .primary{
    background: var(--dodgerblue-600);
    border: 1px solid var(--dodgerblue-600);
    color: ${props => props.ColorText ? props.ColorText : 'var(--write-100)'} ;
    &:hover{
      background: var(--dodgerblue-700);
      border: 1px solid var(--dodgerblue-700);
    }
  }
  .success{
    background: var(--green-700);
    border: 1px solid var(--green-800);
    color: ${props => props.ColorText ? props.ColorText : 'var(--write-100)'} ;
    &:hover{
      background: var(--green-800);
    }
  }
  .default{
    background: var(--black-600) ;
    border: 1px solid var(--black-600) ;
    color: ${props => props.ColorText ? props.ColorText : 'var(--write-100)'} ;
    &:hover{
      background: var(--black-700);
      border: 1px solid var(--black-700) ;
    }
  }
  .warning{
      background: var(--yellow-500) ;
      border: 1px solid var(--yellow-500) ;
      color: ${props => props.ColorText ? props.ColorText : 'var(--write-100)'} ;
      &:hover{
        background: var(--yellow-600);
        border: 1px solid var(--yellow-500) ;
      }
    }
  .lg{
    padding: .5rem 1rem;
  }
  a{
    text-decoration: none;
  }
`
const Button2 = styled.button`
  width: 100%;
  border: 0;
  border-radius: .3rem;
  cursor: pointer;
  background-color: var(--black-600);
  color: var(--write-500);
  transition: .1s;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  padding: .4rem .9rem;
  font-size: var(--size-14);
  padding-left: ${props => props.iconImg ? '2rem' : '.6rem'};
  &:hover{
    background-color: var(--black-800);
  }
  img{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-right: .5rem;
  }


`
const IconBtn = styled.div`
  width: 12px;
  height: 12px;
  overflow: hidden;
  display: flex;
  color: ${props => props.iconColor ? props.iconColor : 'white'};
  align-items: center;
  margin-right: 5px;
  svg{
    max-width: 100%;
    max-height: 100%;
  }
`