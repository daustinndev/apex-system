import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

export const AlertTime = ({icon, text}) => {
  return (
    <Container>
      <Content>
        <span><FontAwesomeIcon icon={icon && icon}/></span>
        <p>{text}</p>
      </Content>
    </Container>
  )
}
const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  left: 0;
  bottom: 20px;
  z-index: 100;
  width: 100%;
  justify-content: center;
`
const Content = styled.div`
  background: var(--black-600);
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 4px;
  cursor: default;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.5);
  p{
    color: var(--write-300);
    margin: 0;
    font-size: var(--size-13);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 0 4px;
  }
  span{
    background-color: var(--black-800);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      width: 50%;
      height: 50%;
      color: var(--write-400);
    }
  }
`