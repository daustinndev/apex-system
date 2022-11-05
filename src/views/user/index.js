import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faEllipsis, faKey, faPhone, faPlus, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ButtonPrimary } from '../../components/buttons';
import { ColumnGrid, RowGrid } from '../../components/grid';
import { Combobox, FormControl, TextArea } from '../../components/input/formControl';
import { LoaderCircle } from '../../components/loading';
import { BtnSidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLayout } from '../../components/sidebar';
import { useAuth } from '../../context/authContext';
import { onChangeMethod } from '../../features/nav/navSlice';

export default function UserProfile() {
    const { userDetail, user, userDetailLoading } = useAuth()
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onChangeMethod('profile'));
    }, [])
    return (

        <Container>
            {
                userDetailLoading ?
                    <LoaderCircle />
                    :
                    <>
                        <LeftUser>
                            <BannerBackground uri={userDetail.bannerUrl}>
                                <div className="banner_edit">
                                    <input type="file" id='banner_edit_input' />
                                    <label title='Cambiar foto de portada' htmlFor="banner_edit_input">
                                        <div className="btn__edit">
                                            <FontAwesomeIcon icon={faEdit} />
                                            <span>Editar Portada</span>
                                        </div>
                                    </label>
                                </div>
                            </BannerBackground>
                            <div className='body'>
                                <input type="file" id='file_update' />
                                <div className="container-profile">
                                    <label title='Cambiar foto de perfil' className='fileupdate' htmlFor="file_update">
                                        <img src={userDetailLoading ? '' : userDetail.photoURL ? userDetail.photoURL : user.photoURL ? user.photoURL : '/assets/no-profile.png'} alt="" />
                                        <div className="icon-slider">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </div>
                                    </label>
                                </div>
                                <div className="body_info">
                                    <h1>{userDetail.firstName} {userDetail.lastName}</h1>
                                    <small>{userDetail.type}</small>
                                    <RowGrid styled={{ marginTop: '10px' }}>
                                        <ColumnGrid w='10'>
                                            <ButtonPrimary ClasName='default'>Editar Perfil</ButtonPrimary>
                                        </ColumnGrid>
                                        <ColumnGrid w='2'>
                                            <BtnSidebar Element={<ButtonPrimary ClasName='default'><FontAwesomeIcon icon={faEllipsis} /></ButtonPrimary>}>
                                                <SidebarLayout>
                                                    <SidebarBody>
                                                        <SidebarItem Icon={faEdit} Text='Editar Perfil'></SidebarItem>
                                                        <SidebarItem Icon={faKey} Text='Cambiar Contraseña'></SidebarItem>
                                                        <SidebarItem Icon={faTrash} Text='Eliminar Perfil'></SidebarItem>
                                                    </SidebarBody>
                                                </SidebarLayout>
                                            </BtnSidebar>
                                        </ColumnGrid>
                                    </RowGrid>
                                    <div className="body__info_detail">
                                        <ul>
                                            <li>
                                                <span><FontAwesomeIcon icon={faGoogle} /></span>
                                                <p>{user.email}</p>
                                            </li>
                                            <li>
                                                <span><FontAwesomeIcon icon={faPhone} /></span>
                                                <p>{userDetail.phoneNumber}</p>
                                            </li>
                                            <li>
                                                <span><FontAwesomeIcon icon={faUser} /></span>
                                                <p>{userDetail.username}</p>
                                            </li>
                                            <li>
                                                <span></span>
                                                <p>{userDetail.firstName} {userDetail.lastName} </p>
                                            </li>
                                            <li>
                                                <span></span>
                                                <p>{userDetail.roles.users} </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </LeftUser>
                        <RightUser>
                            {
                                edit ?
                                    <form action="">
                                        <RowGrid>
                                            <ColumnGrid w='12'>
                                                <FormGroup>
                                                    <FormControl iconSvg={faKey} onValue={user.uid} disabled placeholderLabel='Identificador' />
                                                </FormGroup>
                                            </ColumnGrid>
                                        </RowGrid>
                                        <RowGrid>
                                            <ColumnGrid w='6'>
                                                <FormGroup>
                                                    <FormControl iconSvg={faGoogle} onValue={user.email} disabled placeholderLabel='Correo' />
                                                </FormGroup>
                                            </ColumnGrid>
                                            <ColumnGrid styled={{ marginTop: '20px' }} w='6'>
                                                <FormGroup>
                                                    <ButtonPrimary icon={faKey} title='Cambiar Contraseña' ClasName='default'>Cambiar contraseña</ButtonPrimary>
                                                </FormGroup>
                                            </ColumnGrid>
                                        </RowGrid>
                                        <RowGrid>
                                            <ColumnGrid w='6'>
                                                <FormGroup>
                                                    <FormControl required onValue={userDetail.username} placeholder='Nombre de usuario' placeholderLabel='Nombre de usuario' />
                                                </FormGroup>
                                            </ColumnGrid>
                                            <ColumnGrid w='6'>
                                                <FormGroup>
                                                    <Combobox onValue={userDetail.type ? userDetail.type : '5'} disabled placeholderLabel='Tipo'>
                                                        <option value="1">Administrador</option>
                                                        <option value="2">Usuario</option>
                                                        <option value="3">Comprador</option>
                                                        <option value="4">Vendedor</option>
                                                        <option value="5">Comun</option>
                                                    </Combobox>
                                                </FormGroup>
                                            </ColumnGrid>
                                        </RowGrid>
                                        <RowGrid>
                                            <ColumnGrid w='6'>
                                                <FormGroup>
                                                    <FormControl required onValue={userDetail.firstName} placeholder='Nombres' placeholderLabel='Nombres' />
                                                </FormGroup>
                                            </ColumnGrid>
                                            <ColumnGrid w='6'>
                                                <FormGroup>
                                                    <FormControl required onValue={userDetail.lastName} placeholder='Apellidos' placeholderLabel='Apellidos' />
                                                </FormGroup>
                                            </ColumnGrid>
                                        </RowGrid>
                                        <RowGrid>
                                            <ColumnGrid w='6'>
                                                <FormGroup>
                                                    <FormControl required onValue={userDetail.dni_cni && userDetail.dni_cni} maxLength='10' placeholderLabel='Dni / Cni' />
                                                </FormGroup>
                                            </ColumnGrid>
                                            <ColumnGrid w='6'>
                                                <FormGroup>
                                                    <FormControl required iconSvg={faPhone} onValue={userDetail.phoneNumber} placeholder='Telefono' placeholderLabel='Telefono' />
                                                </FormGroup>
                                            </ColumnGrid>
                                        </RowGrid>
                                        <RowGrid>
                                            <ColumnGrid w='12'>
                                                <FormGroup>
                                                    <TextArea minHeigth='200px' placeholder='Biografia' />
                                                </FormGroup>
                                            </ColumnGrid>

                                        </RowGrid>
                                        <RowGrid>
                                            <ColumnGrid w='4'>
                                                <ButtonPrimary ClasName='default'>Cancelar</ButtonPrimary>
                                            </ColumnGrid>
                                            <ColumnGrid w='8'>
                                                <FormGroup>
                                                    <ButtonPrimary ClasName='success'>Actualizar</ButtonPrimary>
                                                </FormGroup>
                                            </ColumnGrid>
                                        </RowGrid>
                                        {/* <RowGrid>
                                    <ColumnGrid w='12'>
                                        <ButtonPrimary disabled ClasName='error'>Eliminar Cuenta</ButtonPrimary>
                                    </ColumnGrid>
                                </RowGrid> */}
                                    </form>
                                    :
                                    <></>
                            }

                        </RightUser>
                    </>
            }

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 20px;
    max-width: 900px;
    justify-content: center;
    padding: 0 4rem;
    margin-top: 2rem;
`
const BannerBackground = styled.div`
    background-image: url(${props => props.uri ? props.uri : ''});
    border: 1px solid var(--black-500);
    width: 400px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    position: relative;
    &:hover .banner_edit{
        opacity: 1;
    }
    .banner_edit{
        opacity: 0;
        transition: .2s;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        padding: 10px;
        input{
            display: none;
        }
        label{
            cursor: pointer;
            .btn__edit{
                display: flex;
                align-items: center;
                color: var(--write-200);
                background-color: rgba(255,255,255,.2);
                border-radius: 5px;
                padding: 7px 10px;
                transition: .2s;
                &:hover{
                    background-color: rgba(255,255,255,.3);
                }
                svg{
                    width: 15px;
                    height: 15px;
                }
                span{
                    margin-left: 5px;
                    font-size: 14px;
                }
            }
        }
    }
`
const LeftUser = styled.div`

    .body{
        margin-top: -100px;
        input{
            display: none;
        }
        .fileupdate{
            cursor: pointer;
        }
        .container-profile{
            margin: 0 auto;
            position: relative;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            overflow: hidden;
            background-color: var(--black-200);
            border: 7px solid var(--body);
            display: flex;
            justify-content: center;
            img{
                max-width: 100%;
                height: 100%;
            }
            &:hover .icon-slider{
                opacity: 1;
            }
            &::before{
                content: " ";
                position: absolute;
                border-radius: 50%;
                top: 0px;
                left: 0px;
                right: 0px;
                bottom: 0px;
                border: 1px solid var(--black-500);
            }
            .icon-slider{
                position: absolute;
                opacity: 0;
                transition: .2s;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,.5);
                display: flex;
                align-items: center;
                justify-content: center;
                svg{
                    color: var(--write-200);
                    width: 18px;
                    height: 18px;
                    background-color: rgba(255,255,255,.1);
                    padding: 10px;
                    border-radius: 50%;
                }
            }
        }
        .body_info{
            margin: 10px 0;
            text-align: center;
            h1{
                text-align: center;
                margin: 0;
                font-size: 27px;
                letter-spacing: -1px;
                font-family: Arial, Helvetica, sans-serif;
            }
            small{
                color: var(--write-500);
            }
            .body__info_detail{
                text-align: left;
                border-top: 1px solid var(--black-500);
                margin-top: 15px;
                padding-top: 15px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                ul{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    li{
                        display: flex;
                        align-items: center;
                        span{
                            width: 20px;
                            svg{
                                width: 20px;
                                height: 20px;
                            }
                            color: var(--write-600);
                        }
                        p{
                            padding-left: 10px;
                            margin: 0;
                            color: var(--write-100);
                           
                        }
                    }
                }
            }
        }
    }
`
const RightUser = styled.div`
    width: 100%;
`
const FormGroup = styled.div`
    padding-bottom: 10px;
`