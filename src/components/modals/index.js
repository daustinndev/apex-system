import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { ButtomCircle } from '../buttons'

export function disableScroll() {
    var body = document.getElementById('otirudue');
    body.classList.add('ov_hidden')
    body.classList.remove('ov_scroll')
}

export function enableScroll() {
    var body = document.getElementById('otirudue');
    body.classList.add('ov_scroll')
    body.classList.remove('ov_hidden')
}

export const ModalLayout = ({ children, w }) => {
    useEffect(() => {
        disableScroll()
    }, [])
    return (
        <>
            <Container>
                <Content  data-aos="fade-zoom-in"data-aos-duration="500" w={w}>
                    {children}
                </Content>
            </Container>
        </>
    )
}
export const ModalHeader = ({ title, icon, modal, setModal }) => {
    function closeModal() {
        if (modal.valide) {
            const r = window.confirm('Es posible que los cambios de eliminen \n\n¿Estas seguro de cerrar el formulario?')
            if (r) {
                setModal({statu: false, valide: false})
                enableScroll()
            }
        } else {
            setModal({statu: false, valide: false})
            enableScroll()
        }
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
export const ModalHeaderItem = ({ title, description, onClick }) => {
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
export const ModalBodyItem = ({ children }) => {
    return (
        <>
            <Body>
                {children}
            </Body>
        </>
    )
}
export const ModalFooter = ({ children }) => {
    return (
        <>
            <FooterModal>
                {children}
            </FooterModal>
        </>
    )
}
export const ModalBody = ({ children }) => {
    return (
        <>
            <BodyModal>
                {children}
            </BodyModal>
        </>
    )
}
export const BtnModal = ({ children, Element, modal, setModal }) => {
    function openModal() {
        setModal({ ...modal, statu: true })
        disableScroll()
    }
    function closeModal() {
        if (modal.valide) {
            const r = window.confirm('Es posible que los cambios de eliminen \n\n¿Estas seguro de cerrar el formulario?')
            if (r) {
                setModal({statu: false, valide: false})
                enableScroll()
            }

        } else {
            setModal({statu: false, valide: false})
            enableScroll()
        }

    }
    return (
        <>
            <BtnOnclick  >
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
         width: 100%;
         height: 100vh;
         z-index: 100;
         position: fixed;
         background-color: rgba(0,0,0,0.5);
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
    width: ${props => props.w ? props.w + 'px' : '400px'} ;
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
