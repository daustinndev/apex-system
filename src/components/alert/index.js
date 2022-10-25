import { faInfoCircle, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { FormatLineBreak } from '../../hooks/functions'
import { ButtomCircle, ButtonPrimary } from '../buttons'
import { ColumnGrid, RowGrid } from '../grid'
import { FormControl } from '../input/formControl'

export const BtnAlert = ({ Element, children }) => {
    return (
        <>
            <BtnOnclick >
                {/* <><BtnContiner>{Element}</BtnContiner></>
                {
                    modal.statu &&
                    <>
                        <IframeFixed onClick={() => setModal(false)} />
                        {children}
                    </>
                } */}

            </BtnOnclick>
        </>
    )
}



export const Alert = ({
    onClick,
    error,
    type,
    children,
    btnTitle: btnPrimary,
    btnTitleOnclick: btnPrimaryOnclick,
    btnDefault,
    btnDefaultOnclick
}) => {
    return (
        <>
            <IframeFixed onClick={onClick} />
            <Container>
                <Content>
                    <Header>
                        <h1><FontAwesomeIcon icon={faInfoCircle} /> {error.title}</h1>
                        <ButtomCircle onClick={onClick} icon={faXmark} />
                    </Header>
                    <Body>
                        <span>{error.header}</span>
                        <div className='yeue7te'>
                            <FormatLineBreak text={error.description} />
                        </div>
                        {children}
                    </Body>
                    <Footer>
                        <RowGrid>
                            {
                                btnDefault &&
                                <ColumnGrid w='4'>
                                    <ButtonPrimary onClick={btnDefaultOnclick} ClasName='default'>
                                        {btnDefault}
                                    </ButtonPrimary>
                                </ColumnGrid>
                            }
                            <ColumnGrid w={btnDefault ? '8' : '12'}>
                                <ButtonPrimary onClick={btnPrimaryOnclick ? btnPrimaryOnclick : onClick} ClasName={error.type}>
                                    {btnPrimary}
                                </ButtonPrimary>
                            </ColumnGrid>
                        </RowGrid>
                    </Footer>

                </Content>

            </Container>
        </>
    )
}
const Header = styled.header`
    display: flex;
    align-items: center;
    h1{
        margin: 0;
        margin-right: auto;
    }
    .warning{
        color: var(--yellow-200) !important;
    }
    border-bottom: 1px solid var(--black-700);
    padding: 5px 0;
`
const Body = styled.div`
    padding: 10px 0;
    .yeue7te{
        margin-top: 5px;
        margin-bottom: 10px;
        padding-left: 10px;
    }
    span{
        color: var(--write-400);
        font-size: var(--size-18);
      
    }
    p{
        color: var(--write-200);
        margin: 0;
        font-size: 16px;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`
const Footer = styled.div`
    padding-bottom: 10px;
`
const IframeFixed = styled.div`
     &::before{
         content: "";
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
         position: absolute;
         background-color: rgba(0,0,0,0.7);
         backdrop-filter: blur(3px);
         border-radius: 8px;
     }
     
 `
const Content = styled.div`
    background-color: var(--black-400);
    border: 1px solid var(--black-600);
    border-radius: 8px;
    padding: 0 .5rem;
    color: var(--write-100);
`

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const BtnOnclick = styled.div`
    position: relative;
    border-radius: 50%;
`