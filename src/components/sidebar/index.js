import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';

import styled from "styled-components";
import { ButtomCircle } from '../buttons';
import { Loader } from '../loading';

export const SidebarHeader = ({ title, href, hrefText, iconBtn, iconBtnOnclick }) => {
  return (
    <>
      <Header>
        <h5>{title}</h5>
        {href && <a href={href}>{hrefText}</a>}
        {iconBtn && <ButtomCircle onClick={iconBtnOnclick} icon={iconBtn} />}
      </Header>
    </>
  )
}
export const SidebarBody = ({ children, loading , styled}) => {
  return (
    <>
      <Body>
        <UlList style={{styled}}>
          {
            loading ?
              <LoadingBody>
                <Loader />
              </LoadingBody>
              :
              <>
                {children}
              </>
          }
        </UlList>
      </Body>
    </>
  )
}
export const SidebarItem = ({ Href, Icon, IconColor, Text, NewReload, timeAgo,onClick }) => {
  return (
    <>
      <LiItem onClick={onClick} IconColor={IconColor} timeAgo={timeAgo}>
        <a href={Href}>
          <span>{Icon && <FontAwesomeIcon icon={Icon} />} </span>
          <p>{Text} {timeAgo && <small> • {timeAgo}</small>}</p>
          {NewReload && <div className="NewReload" />}
        </a>
      </LiItem>
    </>
  )
}
export const SidebarLayout = ({ children, wSidebar }) => {
  return (
    <>
      <Container w={wSidebar}>
        {children}
      </Container>
    </>
  )
}
export const BtnSidebar = ({ children, Element }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <BtnOnclick >
        <><BtnContiner onClick={() => setShow(!show)}>{Element}</BtnContiner></>
        {
          show &&
          <>
            <IframeFixed onClick={() => setShow(false)} />
            {children}
          </>
        }

      </BtnOnclick>
    </>
  )
}


const BtnOnclick = styled.div`
 position: relative;
 border-radius: 50%;
`
const BtnContiner = styled.div`
    border-radius: 50%;
`
const IframeFixed = styled.div`
    &::before{
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 98;
        position: fixed;
    }
`
const LoadingBody = styled.div`
  width: 100px;
  margin: 5px auto;
  display: flex;
`
const Container = styled.div`
  margin: .6rem 0rem;
  min-width: ${props => props.w ? props.w : '230px'} ;
  position: absolute;
  background-color: var(--black-400);
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.6);
  border-radius: 7px;
  border: 1px solid var(--black-500);
  right: 0;
  z-index: 99;
`
const Header = styled.div`
  border-bottom: 1px solid var(--black-600);
  margin-left: 5px;
  display: flex;
  align-items: center;
  padding: 4px;
  h5{
    font-size: var(--size-18);
  }
  a{
    margin-left: auto;
    margin-right: 8px;
    color: var(--dodgerblue-400);
    font-weight: bold;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`
const Body = styled.div`
  overflow-y: auto;
  max-height: 80vh;
  &::-webkit-scrollbar{
    background-color: transparent;
    width: 7px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: var(--black-800);
    border-radius: 5px;
  }
`
const UlList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--black-400);
  border-radius: 6px;

`
const LiItem = styled.li`
  a{
    position: relative;
    padding: 4px 0;
    display: flex;
    font-size: 14px;

    align-items: center;
    color: var(--write-300);
    text-decoration: none;
    border-radius: 5px;
    transition: .1s;
    cursor: pointer;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    span{
      min-width: 35px;
      min-height: 35px;
      width: 27px;
      height: 27px;
      background-color: var(--black-600);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px;
      svg{
        color: ${props => props.IconColor ? props.IconColor : 'var(--write-000)'};
        font-size: 20px;
      }
    }
    p{
      padding-right: 10px;
      margin: 0;
      font-size: var(--size-15);
      small{
        color: ${props => props.timeAgo == 'Hace un momento' ? 'var(--green-300)' : 'var(--write-600)'};
      }
    }
    &:hover{
      background-color: var(--black-600);
    }
    .NewReload{
      min-width: 6px;
      min-height: 6px;
      border-radius: 50%;
      background-color: var(--dodgerblue-500);
      left: 96%;
      position: absolute
    }
  }
`