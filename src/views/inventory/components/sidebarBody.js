import { faBarsStaggered, faChartLine, faChevronLeft, faChevronRight, faDollar, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ButtomCircle, ButtonPrimary } from '../../../components/buttons'
import { ColumnGrid, RowGrid } from '../../../components/grid'
import { LoaderCircle } from '../../../components/loading'
import { db } from '../../../firebase/config'
import { formatNumberMoney } from '../../../hooks/functions'

export const SidebarBodyProduct = ({ product }) => {
    const [supplier, setSupplier] = useState({})
    const [loaders, setLoaders] = useState({
        supplier: true
    })
    const [indexSlice, setIndexSlice] = useState(product.dataFiles.length - 1)


    async function getSupplier() {
        try {
            const snap = await getDoc(doc(db, 'supplier', product.supplierId))
            if (snap.exists()) {
                setSupplier(snap.data())
                setLoaders({ supplier: false })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fuctionBtnLeft = () => {
        if (indexSlice === 0) {
            setIndexSlice(1)
        } {
            setIndexSlice(indexSlice - 1)
        }
        console.log(indexSlice)
    }

    function fuctionBtnRight() {
        setIndexSlice(0)
        // if (indexSlice === 2) {
        //     setIndexSlice(0)
        // } {
        //     setIndexSlice(indexSlice + 1)
        // }
        // console.log(indexSlice)
    }

    useEffect(() => {
        getSupplier()
    }, [])

    return (
        <>
            <Container>
                <Header>
                    <ContainerSlise>
                        <SliceFiles>
                            <BtnLeft><ButtomCircle onClick={fuctionBtnLeft} icon={faChevronLeft} /></BtnLeft>
                            <ItemFile>
                                <img src={product.dataFiles[indexSlice].fileUri} alt="" />
                            </ItemFile>
                            <BtnRight><ButtomCircle onClick={fuctionBtnRight} icon={faChevronRight} /></BtnRight>
                        </SliceFiles>
                    </ContainerSlise>
                    <TitleSupplier>
                        <h3>{product.title ? product.title : product.brand + ', ' + product.model}</h3>
                        {
                            loaders.supplier ?
                                <LoaderCircle />
                                :
                                <span>{supplier && supplier.name}</span>
                        }
                    </TitleSupplier>
                </Header>
                <Body>
                    <ListItem>
                        <Item>
                            <Icon>
                                <FontAwesomeIcon icon={faBarsStaggered} />
                            </Icon>
                            <span>{product.cuantity} Disponibles</span>
                        </Item>
                        <Item>
                            <Icon>
                                <FontAwesomeIcon icon={faDollar} />
                            </Icon>
                            <span><b>{formatNumberMoney(product.salePrice)}</b> Precio Unidad </span>
                        </Item>
                        <Item>
                            <Icon>
                                <FontAwesomeIcon icon={faChartLine} />
                            </Icon>
                            <span>Ganancia total: <b>{formatNumberMoney(product.gain)}</b></span>
                        </Item>
                    </ListItem>
                </Body>
                <Footer>
                    <RowGrid>
                        <ColumnGrid w='9'>
                            <ButtonPrimary ClasName='primary'>
                                Ver Producto
                            </ButtonPrimary>
                        </ColumnGrid>
                        <ColumnGrid w='3'>
                            <ButtonPrimary ClasName='default'>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </ButtonPrimary>
                        </ColumnGrid>
                    </RowGrid>
                </Footer>
            </Container>
        </>
    )
}
const BtnLeft = styled.div`
    position: absolute;
    left:5px;
    top: 50%;
    transform: translateY(-50%);
`
const BtnRight = styled.div`
    position: absolute;
    right:5px;
    top: 50%;
    transform: translateY(-50%);
`
const Footer = styled.div`
    padding: 5px;
`
const Body = styled.div`
    padding: 0 10px;
`
const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    span{
        padding-left: 5px;
        font-size: 15px;
        color: var(--write-300);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`
const Icon = styled.div`
    color: var(--write-700);
    width: 18px;
    height: 18px;
    svg{
        width: 100%;
        height: 100%;
    }
`
const Container = styled.div`
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`
const Header = styled.header`
    padding: 5px;
`
const ContainerSlise = styled.div`
    
`
const SliceFiles = styled.div`
    position: relative;
    display: flex;
    width: 100%;
`
const ItemFile = styled.div`
    width: 100%;
    background-color: var(--black-100);
    border-radius: 5px;
    overflow: hidden;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-width: 100%;
        width: auto;
        height: auto;
        max-height: 100%;
    }
    
`
const TitleSupplier = styled.div`
    padding: 5px;
    text-align: center;
    h3{
        margin: 0;
        font-size: var(--size-18);
    }
    span{
        color: var(--write-400);
        font-size: var(--size-12);
    }
`
