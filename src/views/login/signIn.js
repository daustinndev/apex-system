import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ButtomCircle, ButtonPrimary } from '../../components/buttons'
import { ColumnGrid, RowGrid } from '../../components/grid'
import { FormControl } from '../../components/input/formControl'
import { useAuth } from '../../context/authContext'
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { SplashScreenLoading } from '../../components/loading'
export const SignIn = () => {
  const { signIn, user, loading, signInGoogle, signInFacebook, userCrearteDatabase } = useAuth()


  // states
  const [loadinglogin, setLoadinglogin] = useState(false)
  const [loadingGoogle, setLoadingGoogle] = useState(false)
  const [loadingFacebook, setLoadingFacebook] = useState(false)
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")


  // functions
  const handlerChange = ({ target: { name, value } }) => {
    setUserData({
      ...userData,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoadinglogin(true)
    try {
      await signIn(userData)
      setLoadinglogin(false)
    } catch (err) {
      alert(err.code)
      setLoadinglogin(false)
    }
  }
  const SignInGoogle = async (e) => {
    setLoadingGoogle(true)
    let USER_TEMP = {}

    try {
      USER_TEMP = await signInGoogle()
      if (USER_TEMP) {
        const USER_DETAIL = {
          userId: USER_TEMP.user.uid,
          firstName: USER_TEMP.user.displayName ? USER_TEMP.user.displayName : "",
          lastName: "",
          roles: {
            inventory: []
          },
          type: "usuario",
          username: USER_TEMP.user.uid,
          photoURL: USER_TEMP.user.photoURL ? USER_TEMP.user.photoURL : null,
          phoneNumber: USER_TEMP.user.phoneNumber ? USER_TEMP.user.phoneNumber : "",
        }
        userCrearteDatabase(USER_DETAIL)
      }
      setLoadingGoogle(false)
    } catch (error) {
      alert(error.code)
      setLoadingGoogle(false)
    }
  }
  const SignInFacebook = async (e) => {
    setLoadingFacebook(true)
    let USER_TEMP = {}
    try {
      USER_TEMP = await signInFacebook()
      if (USER_TEMP) {
        const USER_DETAIL = {
          userId: USER_TEMP.user.uid,
          firstName: USER_TEMP.user.displayName ? USER_TEMP.user.displayName : "",
          lastName: "",
          roles: {
            inventory: []
          },
          type: "usuario",
          username: USER_TEMP.user.uid,
          photoURL: USER_TEMP.user.photoURL ? USER_TEMP.user.photoURL : null,
          phoneNumber: USER_TEMP.user.phoneNumber ? USER_TEMP.user.phoneNumber : "",
        }
        userCrearteDatabase(USER_DETAIL)
      }
      setLoadingFacebook(false)
    } catch (error) {
      alert(error.code)
      setLoadingFacebook(false)
    }
  }


  //alert
  let interval;
  function timeOut() {
    setError("");
    clearInterval(interval)
  }
  function alert(error) {
    setError(error)
    interval = setInterval(timeOut, 4000)
  }


  // returns
  if (user) return <Navigate to='/' />
  if (loading) return <SplashScreenLoading />
  return (
    <>
      <Container>
        <Header>
          <LogoApex>
            <img src="/apex-icons/apex-logo-letter.png" alt="" />
          </LogoApex>
        </Header>
        <Body>
          <RowGrid className='flex-bnnr'>
            <ColumnGrid w='3'>
              <BannerLogin>
                <BannerLoginBack />
              </BannerLogin>
            </ColumnGrid>
            <ColumnGrid w='9'>
              <FormLogin>
                {
                  error &&
                  error !== "auth/popup-closed-by-user" &&
                  <ContainerError>
                    <Content>
                      <FontAwesomeIcon icon={faInfoCircle} />
                      <p>
                        {
                          error === "auth/invalid-email" ? "Correo invalido"
                            :
                            error === "auth/user-not-found" ? "Correo no encontrado"
                              :
                              error === "auth/wrong-password" ? "Contraseña incorrecta"
                                :
                                error === "auth/user-disabled" ? "Tu cuenta ha sido deshabilitado"
                                  :
                                  error === "auth/account-exists-with-different-credential" ? "Ya existe una cuenta con este correo , intente con otra cuenta"
                                    :
                                    error
                        }
                        <a href="">Ayuda</a>
                      </p>
                    </Content>
                  </ContainerError>
                }
                <HeaderForm>
                  <div className='text'>
                    <h2>Sig In</h2>
                    <p>Inicia sesion con tu cuenta</p>
                  </div>
                  <ButtomCircle icon={faGithub} title='Github Apex System' />
                </HeaderForm>
                <form onSubmit={handleSubmit}>
                  <RowGrid>
                    <ColumnGrid w='12'>
                      <FormGroup>
                        <FormControl name='email' onChange={handlerChange} onValue={userData.email} placeholderLabel='Correo' required ></FormControl>
                      </FormGroup>
                    </ColumnGrid>
                  </RowGrid>
                  <RowGrid>
                    <ColumnGrid w='12'>
                      <FormGroup>
                        <FormControl name='password' onChange={handlerChange} onValue={userData.password} placeholderLabel='Contraseña' type='password'></FormControl>
                        <div className='resetpassword'>
                          <a href="">¿Olvidaste tu contraseña?</a>
                        </div>
                      </FormGroup>
                    </ColumnGrid>
                  </RowGrid>
                  <RowGrid>
                    <ColumnGrid w='12'>
                      <FormGroup>
                        <ButtonPrimary loading={loadinglogin} ClasName='primary'>Iniciar sesion</ButtonPrimary>
                      </FormGroup>
                    </ColumnGrid>
                  </RowGrid>
                </form>
                <RowGrid>
                  <ColumnGrid w='12'>
                    <LineOterText>
                      <span>o</span>
                    </LineOterText>
                  </ColumnGrid>
                </RowGrid>
                <RowGrid>
                  <ColumnGrid w='12'>
                    <FormGroup>
                      <ButtonPrimary href='/sign-up' ColorText='var(--dodgerblue-300)' ClasName='default'>Crear cuenta</ButtonPrimary>
                    </FormGroup>
                  </ColumnGrid>
                </RowGrid>
                <RowGrid>
                  <ColumnGrid w='12'>
                    <FormGroup>
                      <ButtonPrimary onClick={SignInGoogle} loading={loadingGoogle} ClasName='default' icon={faGoogle}>Entrar con Google</ButtonPrimary>
                    </FormGroup>
                  </ColumnGrid>
                </RowGrid>
                <RowGrid>
                  <ColumnGrid w='12'>
                    <FormGroup>
                      <ButtonPrimary onClick={SignInFacebook} loading={loadingFacebook} ClasName='default' icon={faFacebook}>o Facebook</ButtonPrimary>
                    </FormGroup>
                  </ColumnGrid>
                </RowGrid>
                <FooterForm>
                  Power by <a href="">Firebase</a> & <a href="">Daustinn Dev</a>
                </FooterForm>
              </FormLogin>
            </ColumnGrid>
          </RowGrid>
        </Body>
        <Fotter>
          <UlList>
            <LiItem>
              <span>© 2022 Apex, Inc.</span>
            </LiItem>
            <LiItem>
              <a href="">Terminos y condiciones</a>
            </LiItem>
            <LiItem>
              <a href="">Privacidad</a>
            </LiItem>
            <LiItem>
              <a href="">Acerca de</a>
            </LiItem>
            <LiItem>
              <a href="">Mi empresa</a>
            </LiItem>
            <LiItem>
              <span>From <a href="">Daustinn Dev</a></span>
            </LiItem>
          </UlList>
        </Fotter>
      </Container>
    </>
  )
}
const ContainerError = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  right: 10px;
  width: 100%;
  padding: 10px;  
`
const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  margin: 0 auto;
  background-color: rgba(255, 13, 13, 0.9);
  border-radius: 5px;
  svg{
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 5px;
    color: var(--write-000);
  }
  p{
    color: var(--write-000);
    font-size: 14px;
    a{
      color: var(--write-000);
      font-weight: bold;
      margin-left: 5px;
      font-size: 12px;
    }
  }
`
const BannerLogin = styled.div`
  padding: 5px;
  padding-right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const BannerLoginBack = styled.div`
  background-image: url(/assets/backlogin.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  transition: .3s;
  animation: banneranimate 5s linear infinite alternate-reverse;
  @keyframes banneranimate {
    0%{
      background-position: left;
    }
    100%{
      background-position: right;
    }
  }
  @media (max-width: 628px) {
    display: none;
  }
`
const FooterForm = styled.p`
  text-align: center;
  font-size: var(--size-14);
  color: var(--write-300);
  padding-top: 8px;
  margin: 0;
  a{
    color: var(--dodgerblue-400);
  }
`
const LineOterText = styled.div`
  position: relative;
  text-align: center;
  color: var(--write-100);
  font-size: var(--size-12);
  padding: 5px;
  &::after{
    content: "";
    top: 50%;
    left: 10px;
    width: 40%;
    height: 1px;
    background-color: var(--black-800);
    position: absolute;
  }
  &::before{
    content: "";
    top: 50%;
    right: 10px;
    width: 40%;
    height: 1px;
    background-color: var(--black-800);
    position: absolute;
  }
  span{
    background-color: var(--black-300);
  }
`
const HeaderForm = styled.div`
width: 100%;
  .text{
    margin-right: auto;
    h2{
    font-size: var(--size-25);
    font-weight: normal;
    }
    p{
      color: var(--write-600);
      font-size: var(--size-14);
    }
  }
  display: flex;
`
const Container = styled.div`
    padding: 30px;
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    @media (max-width: 628px) {
      padding: 10px;
    }
`
const Header = styled.div``
const Body = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 0 auto;
  background-color: var(--black-300);
  border: 1px solid var(--black-400);
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0 0 30px 1px rgba(0,0,0,.5);
  >div{
    width: 100%;
  }
  @media (max-width: 628px) {
    width: 100%;
    background-color: transparent;
    box-shadow: 0 0 30px 1px rgba(0,0,0,0);
    border: 0px solid var(--black-400);
    .flex-bnnr{
      flex-direction: column;
      >div{
        width: 100% !important;
      }
    }
  }
  
`
const LogoApex = styled.div`
  img{
    width: 150px;
  }
`
const FormLogin = styled.div`
  position: relative;
  padding: 10px;
`
const Fotter = styled.div`
  margin-top: auto;
`
const FormGroup = styled.div`
  margin-top: 10px;
  .resetpassword{
    margin: 4px 0;
  }
  a{
    color: var(--dodgerblue-400);
    font-size: var(--size-14);
  }
`
const UlList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const LiItem = styled.li`
margin: 0 .5rem;
  span{
    font-size: var(--size-14);
    color: var(--write-700);
  }
  a{
    font-size: var(--size-14);
    color: var(--write-500);
  }
`
