import styled from "styled-components";
import { useSelector } from "react-redux";
import { LineChart } from "react-chartkick";
import 'chartkick/chart.js'

import { useDispatch } from "react-redux";
import { onChangeMethod } from "../../features/nav/navSlice";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faInfoCircle,
    faShoppingCart,
    faMoneyBill,
    faPeopleGroup,
    faHand,
    faPlus,
    faCog
} from "@fortawesome/free-solid-svg-icons";

import { ButtonPrimary } from '../../components/buttons';
import { ImgCircle } from "../../components/img";
import { Posts } from "../../components/posts";
import { Table } from "../../components/table";
import { useEffect } from "react";
export const Corporation_profile = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(onChangeMethod(appInfo.username))
    }, [])
    const dataParams = useParams()
    console.log(dataParams)
    const appInfo = useSelector(state => state.appInfo)
    const recentData = useSelector(state => state.recentData)
    const monthReportData = useSelector(state => state.monthReportData)
    const data = [
        {
            "name": "Ventas",
            "data": {
                "2022-08-01": 51,
                "2022-08-02": 45,
                "2022-08-03": 38,
                "2022-08-04": 45,
                "2022-08-05": 46,
                "2022-08-06": 49,
                "2022-08-07": 25,
                "2022-08-08": 43,
                "2022-08-09": 42,
                "2022-08-10": 40,
                "2022-08-11": 48,
                "2022-08-12": 35,
                "2022-08-13": 47,
                "2022-08-14": 34,
                "2022-08-15": 55,
                "2022-08-16": 42,
                "2022-08-17": 41,
                "2022-08-18": 31,
                "2022-08-19": 35,
                "2022-08-20": 38,
                "2022-08-21": 48,
                "2022-08-22": 50,
                "2022-08-23": 37,
                "2022-08-24": 50,
                "2022-08-25": 53,
                "2022-08-26": 48,
                "2022-08-27": 46,
                "2022-08-28": 51,
                "2022-08-29": 40,
                "2022-08-30": 39,
                "2022-08-31": 48,
                "2022-09-01": 51,
                "2022-09-02": 45,
                "2022-09-03": 38,
                "2022-09-04": 45,
                "2022-09-05": 46,
                "2022-09-06": 49,
                "2022-09-07": 25,
                "2022-09-08": 43,
                "2022-09-09": 42,
                "2022-09-10": 40,
                "2022-09-11": 48,
                "2022-09-12": 35,
                "2022-09-13": 47,
                "2022-09-14": 34,
                "2022-09-15": 55,
                "2022-09-16": 42,
                "2022-09-17": 41,
                "2022-09-18": 31,
                "2022-09-19": 35,
                "2022-09-20": 38,
                "2022-09-21": 48,
                "2022-09-22": 50,
                "2022-09-23": 37,
                "2022-09-24": 50,
                "2022-09-25": 53,
                "2022-09-26": 48,
                "2022-09-27": 46,
                "2022-09-28": 51,
                "2022-09-29": 40,
                "2022-09-30": 39,
                "2022-09-31": 48
            }
        },
        {
            "name": "Servicios", "data": {
                "2022-08-01": 10,
                "2022-08-02": 8,
                "2022-08-03": 7,
                "2022-08-04": 14,
                "2022-08-05": 16,
                "2022-08-06": 6,
                "2022-08-07": 18,
                "2022-08-08": 13,
                "2022-08-09": 12,
                "2022-08-10": 14,
                "2022-08-11": 21,
                "2022-08-12": 7,
                "2022-08-13": 18,
                "2022-08-14": 11,
                "2022-08-15": 10,
                "2022-08-16": 9,
                "2022-08-17": 4,
                "2022-08-18": 5,
                "2022-08-19": 10,
                "2022-08-20": 8,
                "2022-08-21": 10,
                "2022-08-22": 11,
                "2022-08-23": 16,
                "2022-08-24": 18,
                "2022-08-25": 14,
                "2022-08-26": 8,
                "2022-08-27": 3,
                "2022-08-28": 1,
                "2022-08-29": 15,
                "2022-08-30": 13,
                "2022-08-31": 14,
                "2022-09-01": 4,
                "2022-09-02": 6,
                "2022-09-03": 15,
                "2022-09-04": 12,
                "2022-09-05": 9,
                "2022-09-06": 4,
                "2022-09-07": 19,
                "2022-09-08": 15,
                "2022-09-09": 6,
                "2022-09-10": 9,
                "2022-09-11": 5,
                "2022-09-12": 6,
                "2022-09-13": 8,
                "2022-09-14": 9,
                "2022-09-15": 3,
                "2022-09-16": 7,
                "2022-09-17": 2,
                "2022-09-18": 24,
                "2022-09-19": 5,
                "2022-09-20": 17,
                "2022-09-21": 13,
                "2022-09-22": 9,
                "2022-09-23": 10,
                "2022-09-24": 14,
                "2022-09-25": 12,
                "2022-09-26": 8,
                "2022-09-27": 3,
                "2022-09-28": 7,
                "2022-09-29": 4,
                "2022-09-30": 9,
                "2022-09-31": 2
            }
        },
        {
            "name": "Rentas",
            "data": {
                "2022-08-01": 1,
                "2022-08-02": 0,
                "2022-08-03": 3,
                "2022-08-04": 0,
                "2022-08-05": 1,
                "2022-08-06": 5,
                "2022-08-07": 2,
                "2022-08-08": 1,
                "2022-08-09": 6,
                "2022-08-10": 2,
                "2022-08-11": 5,
                "2022-08-12": 3,
                "2022-08-13": 8,
                "2022-08-14": 1,
                "2022-08-15": 0,
                "2022-08-16": 0,
                "2022-08-17": 3,
                "2022-08-18": 2,
                "2022-08-19": 0,
                "2022-08-20": 1,
                "2022-08-21": 3,
                "2022-08-22": 0,
                "2022-08-23": 2,
                "2022-08-24": 4,
                "2022-08-25": 3,
                "2022-08-26": 1,
                "2022-08-27": 2,
                "2022-08-28": 4,
                "2022-08-29": 2,
                "2022-08-30": 0,
                "2022-08-31": 3,
                "2022-09-01": 1,
                "2022-09-02": 0,
                "2022-09-03": 3,
                "2022-09-04": 0,
                "2022-09-05": 1,
                "2022-09-06": 5,
                "2022-09-07": 2,
                "2022-09-08": 1,
                "2022-09-09": 6,
                "2022-09-10": 2,
                "2022-09-11": 5,
                "2022-09-12": 3,
                "2022-09-13": 8,
                "2022-09-14": 1,
                "2022-09-15": 0,
                "2022-09-16": 0,
                "2022-09-17": 3,
                "2022-09-18": 2,
                "2022-09-19": 0,
                "2022-09-20": 1,
                "2022-09-21": 3,
                "2022-09-22": 0,
                "2022-09-23": 2,
                "2022-09-24": 4,
                "2022-09-25": 3,
                "2022-09-26": 1,
                "2022-09-27": 2,
                "2022-09-28": 4,
                "2022-09-29": 2,
                "2022-09-30": 0,
                "2022-09-31": 3
            }
        }
    ]
    return (
        <>
            <Container>
                <Header>
                    <Banner backgroundImage={'/assets/' + appInfo.banner}>
                        <BtnUpdateBanner>
                            <span><FontAwesomeIcon icon={faEdit} /></span>
                        </BtnUpdateBanner>
                    </Banner>
                    <ProfileCanvas>
                        <Img backgroundImage={'/user-profiles/' + appInfo.profile}>
                            {/* <img src="/assets/profile.png" alt="" /> */}
                            <BtnUpdatePhoto>
                                <button>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                            </BtnUpdatePhoto>
                        </Img>
                        <NameProfile>
                            <h2>{appInfo.name}</h2>
                            <p>{appInfo.slogan}</p>
                        </NameProfile>
                    </ProfileCanvas>
                </Header>
                <Nav>
                    <UlListNav>
                        <LiItemNav>
                            <FormControlNav>
                                <ButtonPrimary ClasName='lg'>
                                    <img src={'/user-profiles/' + appInfo.profile} alt="" />
                                    Coporacion Masser
                                </ButtonPrimary>
                            </FormControlNav>
                        </LiItemNav>
                        <LiItemNav>
                            <FormControlNav>
                                <ButtonPrimary
                                    icon={faEdit}
                                    ClasName='primary lg'>
                                    Editar Perfil
                                </ButtonPrimary>
                            </FormControlNav>
                        </LiItemNav>
                        <LiItemNav>
                            <FormControlNav>
                                <ButtonPrimary ClasName='lg' icon={faCog} >
                                    Configuracion
                                </ButtonPrimary>
                            </FormControlNav>
                        </LiItemNav>
                        <LiItemNav style={{ marginLeft: 'auto' }}>
                            <FormControlNav>
                                <ButtonPrimary ClasName='lg'>
                                    ...
                                </ButtonPrimary>
                            </FormControlNav>
                        </LiItemNav>
                    </UlListNav>
                </Nav>
                <MainComponent>
                    <LefCardtInfo>
                        <h3>Informacion</h3>
                        <UlList>
                            <LiItem>
                                <span> <FontAwesomeIcon icon={faInfoCircle} /> </span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima cum aliquid sit voluptatem? Incidunt a placeat earum architecto minus accusamus ea reprehenderit rem deserunt quibusdam. Voluptatibus excepturi vel sit perspiciatis?</p>
                            </LiItem>
                            <LiItem>
                                <span> <FontAwesomeIcon icon={faShoppingCart} /> </span>
                                <p><b>409 939</b> Ventas</p>
                            </LiItem>
                            <LiItem>
                                <span> <FontAwesomeIcon icon={faPeopleGroup} /> </span>
                                <p><b>987</b> Clientes</p>
                            </LiItem>
                            <LiItem>
                                <span> <FontAwesomeIcon icon={faMoneyBill} /> </span>
                                <p>Ingreso: <b>s/49,948.00</b></p>
                            </LiItem>
                            <LiItem>
                                <span> <FontAwesomeIcon icon={faHand} /> </span>
                                <p>Servicios: <b>13 094</b></p>
                            </LiItem>
                            <LiItem>
                                <span> <FontAwesomeIcon icon={faShoppingCart} /> </span>
                                <p><b>409 939</b> Ventas</p>
                            </LiItem>
                            <LiItem>
                                <span> <FontAwesomeIcon icon={faPeopleGroup} /> </span>
                                <p><b>987</b> Clientes</p>
                            </LiItem>
                            <LiItem>
                                <span> <FontAwesomeIcon icon={faMoneyBill} /> </span>
                                <p>Ingreso: <b>s/49,948.00</b></p>
                            </LiItem>
                            <LiItem>
                                <span> <FontAwesomeIcon icon={faMoneyBill} /> </span>
                                <p>Ingreso: <b>s/49,948.00</b></p>
                            </LiItem>
                            <LiItem>
                                <span> <FontAwesomeIcon icon={faHand} /> </span>
                                <p>Servicios: <b>13 094</b></p>
                            </LiItem>
                        </UlList>
                        <FormControl>
                            <ButtonPrimary>
                                Ver reporte
                            </ButtonPrimary>
                        </FormControl>
                    </LefCardtInfo>
                    <PostHistory>
                        <FormControl>
                            <ButtonPrimary icon={faPlus}>
                                Nuevo
                            </ButtonPrimary>
                        </FormControl>
                        <Table
                            overFlowY='auto'
                            title='Actividades recientes realizadas'
                        >
                            <thead>
                                <tr>
                                    <th style={{ maxWidth: '0px' }}>#</th>
                                    <th style={{ width: '20px' }}>Tiempo</th>
                                    <th>Descripcion</th>
                                    <th style={{ width: '40px' }}>Area</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    recentData.map(data =>
                                        <tr key={data.id_}>
                                            <td>{data.id_}</td>
                                            <td>{data.timeStamp}</td>
                                            <td>{data.description}</td>
                                            <td>{data.area}</td>
                                        </tr>
                                    )}
                            </tbody>
                        </Table>
                        <ChartList>
                            <Posts title='Ventas de la semana'>
                                <LineChart
                                    data={data}
                                    loading="Cargando..."
                                    xtitle="Mes"
                                    ytitle="Cantidad"
                                    dataset={{ borderWidth: 1 }}
                                    width="100%"
                                />
                            </Posts>
                            <Posts title='Ventas de la semana'>

                            </Posts>
                        </ChartList>
                    </PostHistory>
                </MainComponent>
            </Container>
        </>
    )
}

const Container = styled.div`
    padding: .5rem;
`
const Header = styled.div`

`
const Banner = styled.div`
    background-image: ${props => props.backgroundImage ? 'url(' + props.backgroundImage + ')' : ''};
    height: 150px;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    &:hover > button{
        opacity: 1;
    }
`
const BtnUpdateBanner = styled.button`
    background-color: rgba(255,255,255,.1);
    border:none;
    outline: 0;
    width: 25px;
    height: 25px;
    margin: .5rem;
    border-radius: 50%;
    cursor: pointer;
    color: var(--write-100);
    transition: .1s;
    opacity: 0;
    &:hover{
        background-color: rgba(255,255,255,.2);
    }
`
const ProfileCanvas = styled.div`
    display: flex;
    padding: 0 40px;
    margin-top: -50px;
    align-items: center;
    @media (max-width: 518px) {
        display: flex;
        flex-direction: column;
        margin-top: -80px;
    }
`
const Nav = styled.nav`
    padding: .5rem 0;
    position: sticky;
    top: 42px;
    background-color: var(--black-200);
    z-index: var(--zIndex-15);
    @media (max-width: 518px) {
        position: relative;
        top: 0;
    }
`
const UlListNav = styled.ul`
    display: flex;
    @media (max-width: 518px) {
        flex-direction: column;
        li{
            margin-top: .5rem;
            width: 100% ;
        }
    }
`
const LiItemNav = styled.li`
    margin: 0 .2rem;
`
const FormControlNav = styled.div`
    
`
const Img = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid var(--black-200);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${props => props.backgroundImage ? 'url(' + props.backgroundImage + ')' : ''};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 518px) {
        width: 150px;
        height: 150px;
    }
    button{
        background-color: rgba(255,255,255,.3);
        border:none;
        outline: 0;
        width: 30px;
        height: 30px;
        margin: .5rem;
        border-radius: 50%;
        cursor: pointer;
        color: var(--write-100);
        transition: .1s;
        opacity: 0;
        &:hover{
            background-color: rgba(255,255,255,.5);
        }
    }
`
const BtnUpdatePhoto = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .1s;
        &:hover{
            background-color: rgba(0,0,0,.4);
        }
        &:hover > button{
            
            opacity: 1;
        }
`
const NameProfile = styled.div`
    padding-top: 40px;
    h2{
        color: var(--write-100);
        font-size: var(--size-20);
        letter-spacing: 1px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    p{
        margin: 0;
        padding: 0 7px;
        text-align: left;
        color: var(--write-500);
        font-size: var(--size-12);
    }
    @media (max-width: 518px) {
        padding-top: 0;
        text-align: center;
    }
`
const MainComponent = styled.div`
    display: flex;
`
const LefCardtInfo = styled.div`
    width: 300px;
    height: min-content;
    background: var(--black-400);
    border-radius: 10px;
    padding: .5rem;
    position: sticky;
    margin-right: .5rem;
    top: 93px;
    @media (max-width: 903px){
        display: none;
    }
`
const UlList = styled.ul`

`
const LiItem = styled.li`
    display: flex;
    color: var(--write-500);
    span{
        margin: .4rem;
        color: var(--write-300);
    }
    p{
        margin: .3rem 0;
        font-size: var(--size-13);
        color: var(--write-200);
        font-weight: 400;
       font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        b{
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
        }
    }
    
`
const FormControl = styled.div`
  margin: 0 .2rem;
`
const PostHistory = styled.div`
    width: 100%;
`
const TableContainer = styled.div`
    
`
const ChartList = styled.section`
    
`

