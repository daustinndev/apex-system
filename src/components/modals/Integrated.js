import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { ButtomCircle } from '../buttons'

export const ModalLayoutIntegrated = ({ children, w,h,setModel }) => {
    useEffect(() => {

    }, [])
    return (
        <>
            <IframeFixed onClick={() => setModel(false)}/>
            <Container>
                <Content w={w} h={h}>
                    {children}
                </Content>
            </Container>
        </>
    )
}
export const ModalHeaderIntegrated = ({ title, icon, modal, setModal }) => {
    function closeModal() {
        setModal(false)
    }
    return (
        <>
            <Header>
                <h4>{title}</h4>
                {icon && <ButtomCircle onClick={() => closeModal()} icon={icon} />}
            </Header>
        </>
    )
}
export const ModalHeaderItemIntegrated = ({ title, description, onClick }) => {
    return (
        <>
            <HeaderItem onClick={onClick}>
                <h5>{title}</h5>
                <small>•</small>
                <p>{description}</p>
            </HeaderItem>
        </>
    )
}
export const ModalBodyItemIntegrated = ({ children }) => {
    return (
        <>
            <Body>
                {children}
            </Body>
        </>
    )
}
export const ModalFooterIntegrated = ({ children }) => {
    return (
        <>
            <FooterModal>
                {children}
            </FooterModal>
        </>
    )
}
export const ModalBodyIntegrated = ({ children }) => {
    return (
        <>
            <BodyModal>
                {children}
            </BodyModal>
        </>
    )
}
export const BtnModalIntegrated = ({ children, Element, modal, setModal }) => {
    function openModal() {
        setModal({ ...modal, statu: true })
    }
    function closeModal() {
        if (modal.valide) {
            const result = window.confirm('¿Estas seguro de cerrar este formulario?')
            if (result) {
                setModal({statu: false, valide: false})
            }

        } else {
            setModal({statu: false, valide: false})
        }

    }
    return (
        <>
            <BtnOnclick >
                <><BtnContiner onClick={() => openModal()}>{Element}</BtnContiner></>
                {
                    modal.statu &&
                    <>
                        <IframeFixed onClick={() => closeModal()} />
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
         position: fixed;
         width: 100%;
         height: 100%;
         z-index: 100;
         background-color: rgba(0,0,0,0.4);
         backdrop-filter: blur(3px);
         border-radius: 8px;
     }
     
 `





const BodyModal = styled.div`
    padding: 4px;
`
const HeaderItem = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 2px;
    small{
        color: var(--write-600);
        margin: 0 4px;
    }
    h5{
        font-size: var(--size-14);
        color: var(--write-400);
        margin: 0;

    }
    p{
        font-size: var(--size-13);
        color: var(--write-600);
        margin: 0;
    }
`
const Body = styled.div`
    padding: 5px;
    background-color: var(--black-300);
    border-radius: 10px;
`
const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    background: var(--black-400);
    border: 1px solid var(--black-500);
    width: ${props => props.w ? props.w : 'auto'} ;
    height: ${props => props.h ? props.h : 'auto'} ;
    border-radius: 10px;
    box-shadow: 0 0 10px 1px rgba(0,0,0,0.5) ;
    position: relative;
`
const Header = styled.div`
    border-bottom: 1px solid var(--black-600);
    padding: 7px;
    display: flex;
    align-items: center;
    h4{
        font-size: var(--size-16);
        margin-right: auto;
    }
`
const FooterModal = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
`
