import React from 'react'
import styled from 'styled-components'
import { Nadbar } from '../components/nadbar'
import { Nav } from '../components/nav'

export const NavRouterInclude = ({ children }) => {
    return (
        <>
            <Nav />
            <Main>
                <NadbarContainer>
                    <Nadbar />
                </NadbarContainer>
                <NavInvisible></NavInvisible>
                <MainCOntainer>
                    {children}
                </MainCOntainer>
            </Main>
        </>
    )
}

export const NadbarRouterInclude = ({ children }) => {
    return (
        <>
            <Nav />
            <Main>
                {children}
            </Main>
        </>
    )
}
const MainCOntainer = styled.div`
    width: 100%;
`
const Main = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
    display: flex;
    padding: .3rem .5rem;

`
const NavInvisible = styled.div`
    min-width: 350px;
    @media (max-width: 788px) {
        min-width: 0px;
    }
`
const NadbarContainer = styled.div`
    width: 350px;
    height: 100vh;
    position: fixed;
    overflow-y: auto;
    /* border-right: 1px solid var(--black-400); */
    z-index: var(--zIndex-15);
    &::-webkit-scrollbar{
        background-color: transparent;
        width: 5px;
        cursor: pointer;
    }
    &::-webkit-scrollbar-thumb{
        background-color: var(--black-500);
        border-radius: 3px;
    }
    @media (max-width: 788px) {
        width: 0px;
        display: none;
        position: fixed;
    }
`
