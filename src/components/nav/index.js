import React, { useState } from 'react'
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// components

import { ImgDefault, ImgCircle } from '../img';
import { faBell,  faUserCircle, faArrowAltCircleDown, faKey, faArrowLeftRotate, faInfoCircle, faSignOutAlt, faShoppingBag, faPeopleCarry,faUserPlus, faGear,  faLanguage, faMoon, faBullhorn,  faWallet, faHome, faShoppingCart, faHandshake, faTruckMoving, faTruckRampBox, faBorderAll } from "@fortawesome/free-solid-svg-icons";
import {  faSkyatlas } from "@fortawesome/free-brands-svg-icons";
import { BtnSidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLayout } from '../sidebar';
import { useAuth } from '../../context/authContext';
import { ButtomItem } from './itemButtom';

export const Nav = () => {
    const {user, userDetail, userDetailLoading ,getUserDetail} = useAuth()
    const {logout} =useAuth()
    const navigate = useNavigate()
    const handleLogout = async()=>{
        await logout();
        navigate('/sign-in')
    }
    return (
        <>
            <ContainerNadbar>
                <NavBar>
                    <LogoApex>
                        <Link to='/'>
                            <ImgDefault url='apex.png' />
                        </Link>
                        {/* <input type="text" name="searsh" id="" placeholder='Buscar'/> */}
                    </LogoApex>
                    <SearshInputContainer>
                        {/* <SearshInput
                            placeholder='Buscar en Apex'
                        /> */}
                    </SearshInputContainer>
                    <NavContainer>
                        <ULList>
                            <LiItem>
                                <BtnSidebar Element={<ButtomItem icon={faBorderAll} title='Agregar' />}>
                                    <SidebarLayout wSidebar='240px'>
                                        <SidebarHeader title='Add new' href='/notify' />
                                        <SidebarBody loading={false}>
                                            <SidebarItem Icon={faShoppingCart} Href='' Text='Venta nueva' />
                                            <SidebarItem Icon={faHandshake} Href='' Text='Realizar un servicio' />
                                            <SidebarItem Icon={faTruckMoving} Href='' Text='Nueva renta' />
                                            <SidebarItem Icon={faBullhorn} Href='' Text='Nueva oferta' />
                                        </SidebarBody>
                                        <SidebarHeader title='Solo administradores' href='/notify' />
                                        <SidebarBody loading={false}>
                                            <SidebarItem Icon={faUserPlus} Href='' Text='Nuevo usuario' />
                                            <SidebarItem  Icon={faShoppingBag} Href='/inventory/create product' Text='Producto nuevo' />
                                            <SidebarItem Icon={faTruckRampBox} Href='' Text='Agregar Proveedor' />
                                            <SidebarItem Icon={faWallet} Href='' Text='Entrada de dinero' />
                                        </SidebarBody>
                                    </SidebarLayout>
                                </BtnSidebar>
                            </LiItem>
                            <LiItem>
                                <ButtomItem onClick={() => navigate('/')} icon={faHome} title='Inicio' />
                            </LiItem>
                            {/* <LiItem>
                                <BtnSidebar Element={<ButtomCircle icon={faFacebookMessenger} title='Messenger' />}>
                                    <SidebarLayout wSidebar='300px'>
                                        <SidebarHeader title='Messenger' href='/notify' iconBtn={faEdit} />
                                        <SidebarBody loading={true}>
                                            <SidebarItem Icon={faSkyatlas} Href='' Text='Hay un nueva actualizacion para tu sistem , con funciones muy intuitivas y nuevas de Apex System' timeAgo='Hace un momento' />
                                            <SidebarItem NewReload Icon={faShoppingBag} Href='' Text='Tienes productos a punto de agotar' timeAgo='28m' />
                                            <SidebarItem NewReload Icon={faPeopleCarry} Href='' Text='Tienes Servicios sin terminar, que ya estan a punto de vencer.' timeAgo='1h' />
                                        </SidebarBody>
                                    </SidebarLayout>
                                </BtnSidebar>
                            </LiItem> */}
                            <LiItem>
                                <BtnSidebar Element={<ButtomItem icon={faBell} title='Notifificaciones' />}>
                                    <SidebarLayout wSidebar='300px'>
                                        <SidebarHeader title='Notificaciones' href='/notify' hrefText='Ver todos' />
                                        <SidebarBody loading={false}>
                                            <SidebarItem Icon={faSkyatlas} Href='' Text='Hay un nueva actualizacion para tu sistem , con funciones muy intuitivas y nuevas de Apex System' timeAgo='Hace un momento' />
                                            <SidebarItem NewReload Icon={faShoppingBag} Href='' Text='Tienes productos a punto de agotar' timeAgo='28m' />
                                            <SidebarItem NewReload Icon={faPeopleCarry} Href='' Text='Tienes Servicios sin terminar, que ya estan a punto de vencer.' timeAgo='1h' />
                                            <SidebarItem Icon={faSkyatlas} Href='' Text='Hay un nueva actualizacion para tu sistem , con funciones muy intuitivas y nuevas de Apex System' timeAgo='1h' />
                                            <SidebarItem Icon={faShoppingBag} Href='' Text='Tienes productos a punto de agotar' timeAgo='28m' />
                                            <SidebarItem NewReload Icon={faPeopleCarry} Href='' Text='Tienes Servicios sin terminar, que ya estan a punto de vencer.' timeAgo='2h' />
                                            <SidebarItem Icon={faSkyatlas} Href='' Text='Hay un nueva actualizacion para tu sistem , con funciones muy intuitivas y nuevas de Apex System' timeAgo='3h' />
                                            <SidebarItem NewReload Icon={faShoppingBag} Href='' Text='Tienes productos a punto de agotar' timeAgo='4h' />
                                        </SidebarBody>
                                    </SidebarLayout>
                                </BtnSidebar>
                            </LiItem>
                            {/* <LiItem>
                                <BtnSidebar Element={<ButtomCircle icon={faList} title='Navegación' />}>
                                    <SidebarLayout wSidebar='330px'>
                                        <SidebarHeader title='Venta' href='/notify' />
                                        <SidebarBody loading={false}>
                                            <SidebarItem Icon={faAdd} Href='' Text='Nuevo' />
                                            <SidebarItem Icon={faBarsProgress} Href='' Text='Administrar' />
                                            <SidebarItem Icon={faSearch} Href='' Text='Buscar' />
                                            <SidebarItem Icon={faFileExport} Href='' Text='Reporte' />
                                        </SidebarBody>
                                        <SidebarHeader title='Producto' href='/notify' />
                                        <SidebarBody loading={true}>
                                            <SidebarItem Icon={faAdd} Href='' Text='Producto nuevo' />
                                            <SidebarItem Icon={faBarsProgress} Href='' Text='Administrar' />
                                            <SidebarItem Icon={faFileExcel} Href='' Text='Exportar' />
                                        </SidebarBody>
                                        <SidebarHeader title='Oferta' href='/notify' />
                                        <SidebarBody loading={false}>
                                            <SidebarItem Icon={faAdd} Href='' Text='Nueva oferta' />
                                            <SidebarItem Icon={faBullhorn} Href='' Text='Administrar oferta - 123' NewReload />
                                        </SidebarBody>
                                        <SidebarHeader title='Otros' href='/notify' />
                                        <RowGrid>
                                            <ColumnGrid w='6'>
                                                <SidebarBody loading={true}>
                                                    <SidebarItem Icon={faUserPlus} Href='' Text='Usuario nuevo' />
                                                    <SidebarItem Icon={faUsers} Href='' Text='Administrar' />
                                                </SidebarBody>
                                            </ColumnGrid>
                                            <ColumnGrid w='6'>
                                                <SidebarBody loading={true}>
                                                    <SidebarItem Icon={faBookmark} Href='' Text='Guardados' />
                                                    <SidebarItem Icon={faWallet} Href='' Text='Billetera' />
                                                </SidebarBody>
                                            </ColumnGrid>
                                        </RowGrid>
                                        <SidebarBody loading={false}>
                                            <SidebarItem IconColor='var(--yellow-300)' Icon={faStar} Href='' Text='Mis Favoritos' />
                                            <SidebarItem Icon={faClockRotateLeft} Href='' Text='Actividades Recientes' />
                                        </SidebarBody>
                                    </SidebarLayout>
                                </BtnSidebar>
                            </LiItem> */}
                            <LiItem>
                                <BtnSidebar Element={<ButtomItem urlImg={userDetailLoading ? '' : userDetail.photoURL ? userDetail.photoURL : user.photoURL ? user.photoURL : '/assets/no-profile.png'} />}>
                                    <SidebarLayout wSidebar='280px'>
                                        <SidebarHeader title='Menu' />
                                        <SidebarBody loading={false}>
                                            <SidebarItem Icon={faUserCircle} Href='' Text='Mi Perfil' />
                                            <SidebarItem Icon={faMoon} Href='' Text='Apariencia (Modo Oscuro)' />
                                            <SidebarItem Icon={faLanguage} Href='' Text='Idioma' />
                                            <SidebarItem Icon={faGear} Href='' Text='Configuracion' />
                                        </SidebarBody>
                                        <SidebarHeader title='Privacidad' />
                                        <SidebarBody loading={false}>
                                            <SidebarItem Icon={faArrowAltCircleDown} Href='' Text='Terminos y condiciones' />
                                            <SidebarItem Icon={faKey} Href='' Text='Privacidad' />
                                            <SidebarItem Icon={faArrowLeftRotate} Href='' Text='Actualizacion' />
                                            <SidebarItem Icon={faInfoCircle} Href='' Text='Acerca de' />
                                            <SidebarItem Icon={faSignOutAlt} onClick={handleLogout} Text='Cerrar Sesion' />
                                        </SidebarBody>
                                    </SidebarLayout>
                                </BtnSidebar>
                            </LiItem>
                        </ULList>
                    </NavContainer>
                </NavBar>
            </ContainerNadbar>
        </>
    )
}


const ContainerNadbar = styled.div`
    position: sticky;
    backdrop-filter: blur(10px);
    background-color: var(--nav);
    top: 0;
    z-index: 100;
    border-bottom: 1px solid var(--black-700);
    box-shadow: 0 10px 20px 1px rgba(0, 0, 0, 0.2);
`
const NavBar = styled.div`
    max-width: var(--container-width);
    padding: .5rem .5rem;
    margin: auto;
    display: flex;
`
const LogoApex = styled.div`
    display: flex;
    align-items: center;
    a{
        display: flex;
        img{
            width: 25px;
            height: 25px;
        }
    }
`
const SearshInputContainer = styled.div`
   margin-left: 10px;
   width: 300px;
   position: relative;
`
const NavContainer = styled.nav`
    margin-left: auto;
`
const ULList = styled.ul`
    display: flex;
`
const LiItem = styled.li`
    margin-left: .5rem;
    position: relative;
`
