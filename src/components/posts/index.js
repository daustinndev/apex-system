import React from 'react'
import styled from "styled-components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Posts = ({ children, title, styled }) => {
    return (
        <>
            <ContainerPost style={styled}>
                <HeaderPost>
                    <h3>{title}</h3>
                </HeaderPost>
                {children}
            </ContainerPost>
        </>
    )
}
const ContainerPost = styled.div`
    background-color: var(--black-200);
    background: linear-gradient(0deg,  rgba(21, 21, 22, .6), rgba(21, 21, 22, .6)), url(/assets/dark-artstation-blur-deviantart.jpeg);
    background-position: center;
    background-size: cover;
    border: 1px solid var(--black-400);
    border-radius: 6px;
    width: auto;
    transition: .2s;
    div{
    canvas{
        width: 100% !important;
    }
  }
  &:hover{
        border: 1px solid var(--dodgerblue-300);
    }
`
const HeaderPost = styled.div`
    display: flex;
    align-items: center;
    padding: .4rem .4rem;
    h3{
        font-size: var(--size-12);
        margin: 0;
        padding: 4px;
    }
`

export const PostProduct = () => {
    
}
