import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const ButtomItem = ({
  icon,
  onClick,
  text, 
  urlImg,
  styled,
  title
}) => {
  return (
    <>
      <ButonCircleContainer  style={styled}>
        <Button  urlImg={urlImg} text={text} onClick={onClick && onClick}>
          {icon && <FontAwesomeIcon icon={icon} />}
          {urlImg && <img src={urlImg && urlImg}  />}
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
  background-color: #4e4f50;
  /* border: 1px solid var(--black-700); */
  border-radius: 20px;
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  min-height: 40px;
  max-height: 40px;
  color: #e7e9ed;
  cursor: pointer;
  transition: background-color .1s;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: ${props => props.urlImg ? '0': '0 8px'};
  &:hover{
    background-color: var(--black-800);
    border: 1px solid var(--black-800);
  }
  svg{
    font-size: 16px;
  }
  span{
    padding: 0 .3rem;
    font-size: var(--size-12);
    font-weight: bold;
  }
  img{
    max-width: 100%;
    height: auto;
  }
`
const IconImg = styled.div`

`