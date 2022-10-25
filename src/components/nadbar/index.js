import { useState } from 'react'
import { useSelector } from "react-redux";

import styled from 'styled-components'
import { useAuth } from '../../context/authContext';
import { ButtomItem } from './buttomItem'


export const Nadbar = () => {
  const {user} = useAuth()
  const [shownav, setShownav] = useState(true)
  const appInfo = useSelector(state => state.appInfo)
  const navData = useSelector(state => state.nav)

  return (
    <>
      <Container>
        <ScrollNav>
          <h2>Navegacion</h2>
          <UlList shownav={shownav}>
            <LiItem>
              <ButtomItem
                UrlImgProfile={user.photoURL ?  user.photoURL : '/assets/no-profile.png'}
                Text={user.displayName ? user.displayName : user.email}
              />
            </LiItem>
            {/* <LiItem>
              <ButtomItem
                UrlImgProfile={appInfo.profile}
                Text={appInfo.name}
                to={'/' + appInfo.username}
                Active={navData.value === appInfo.username && true}
              />
            </LiItem>
            <LiItem>
              <ButtomItem
                UrlImgProfile='apex-profile.jpg'
                Text='Masser Motors'
                to={'/masser-motors'}
                Active={navData.value === 'masser-motors' && true}
              />
            </LiItem> */}
            <LiSeparation />
            <LiItem>
              <ButtomItem
                UrlImg='home'
                Text='Inicio'
                to='/'
                Active={navData.value === 'home' && true}
              />
            </LiItem>
            <LiItem>
              <ButtomItem
                UrlImg='sale-cart'
                Text='Carrito de compras'
                to='/sale-cart'
                Active={navData.value === 'sale-cart' && true}
              />
            </LiItem>
            <LiItem>
              <ButtomItem
                UrlImg='services'
                Text='Servicio'
                to='/services'
                Active={navData.value === 'services' && true}
              />
            </LiItem>
            <LiItem>
              <ButtomItem
                UrlImg='save'
                Text='Guardados'
              />
            </LiItem>
            <LiItem>
              <ButtomItem
                UrlImg='product'
                Text='Inventario'
                to='/inventory'
                Active={navData.value === 'inventory' && true}
              />
            </LiItem>
            <LiItem>
              <ButtomItem
                UrlImg='history'
                Text='Recientes'
              />
            </LiItem>
            <LiItem>
              <ButtomItem
                UrlImg='ofert'
                Text='Oferta' />
            </LiItem>
            <LiItem>
              <ButtomItem
                UrlImg='report'
                Text='Reporte' />
            </LiItem>
            <LiItem>
              <ButtomItem UrlImg='user' Text='Usuarios (Empleados)' />
            </LiItem>
            <LiItem>
              <ButtomItem UrlImg='stadistic' Text='Estadistica' />
            </LiItem>
            <LiItem>
              <ButtomItem UrlImg='calendary' Text='Calendario' />
            </LiItem>
            <LiItem>
              <ButtomItem UrlImg='top' Text='Top 10' />
            </LiItem>
            <LiItem>
              <ButtomItem UrlImg='supplier' Text='Proveedores' />
            </LiItem>
          </UlList>
          <UlList2>
            <LiItem>
              <ButtomItem title={shownav ? 'Mostrar mas' : 'Mostrar menos'} onClick={() => setShownav(!shownav)} UrlImg={shownav ? 'moreBottom' : 'moreTop'} Text={shownav ? 'Ver mas' : 'Ver menos'} />
            </LiItem>
          </UlList2>
          <h2>Acceso confidencial</h2>
          <UlList>
            <LiItem>
              <ButtomItem UrlImg='apex' Text='My Apex' />
            </LiItem>
            <LiItem>
              <ButtomItem UrlImg='wallet' Text='Billetera' />
            </LiItem>
            <LiItem>
              <ButtomItem UrlImg='help' Text='Ayuda' />
            </LiItem>
            <LiItem>
              <FooterList>
                <LiItemFooter>
                  <span>Apex © 2022</span>
                </LiItemFooter>
                <LiItemFooter>
                  -
                </LiItemFooter>
                <LiItemFooter>
                  <a href="">Español</a>
                </LiItemFooter>
                <LiItemFooter>
                  -
                </LiItemFooter>
                <LiItemFooter>
                  <a href="">Terminos</a>
                </LiItemFooter>
                <LiItemFooter>
                  -
                </LiItemFooter>
                <LiItemFooter>
                  <a href="">Mi empresa</a>
                </LiItemFooter>
                <LiItemFooter>
                  -
                </LiItemFooter>
                <LiItemFooter>
                  <a href="">Privacidad</a>
                </LiItemFooter>
                <LiItemFooter>
                  -
                </LiItemFooter>
                <LiItemFooter>
                  <a href="">Seguridad</a>
                </LiItemFooter>
              </FooterList>
            </LiItem>
            <LiItem>
              <ButtomItem disabled />
            </LiItem>
          </UlList>

        </ScrollNav>
      </Container>
    </>
  )
}

const Container = styled.div`
  
  h2{
    text-align: left;
    font-size: var(--size-14);
    padding: .4rem 0;
  }
`
const ScrollNav = styled.div`
  overflow-y: auto;
`
const UlList = styled.ul`
  padding-right: 10px;
  max-height: ${props => props.shownav ? '380px' : 'auto'}; 
  overflow: hidden;
`
const UlList2 = styled.ul`
  padding-right: 10px;
  margin-top: .2rem;
`
const LiItem = styled.li`
  margin-bottom: 5px;
  >ul{
    padding: 0;
    margin-bottom: 20px;
  }
  a{
    text-decoration: none !important;
  }
`
const FooterList = styled.ul`
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  margin-top: auto;
  padding: 0 70px !important;
`
const LiItemFooter = styled.li`
  font-size: var(--size-12);
  color: var(--write-600);
  line-height: 1rem;
  margin-right: 3px;

  a{
    color: var(--write-600);
    transition: .1s;
    &:hover{
      text-decoration: underline;
      color: var(--dodgerblue-300);
    }
  }
`
const LiSeparation = styled.div`
  background-color: var(--black-400);
  height: 1px;
  margin-bottom: .3rem;
`