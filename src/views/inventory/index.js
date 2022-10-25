import { useDispatch, useSelector } from "react-redux";
import { onChangeMethod } from "../../features/nav/navSlice";
import { useEffect } from "react";
import styled from "styled-components";
import { faXmark, faAdd, faHistory, faCopy, faCheckCircle, faFileExcel, faDatabase, faFileImport, faInfoCircle, faStar, faDollar, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { LineChart, AreaChart } from "react-chartkick";

// components
import { ButtomCircle, ButtonPrimary } from "../../components/buttons";
import { Posts } from "../../components/posts";
import { FormControl } from "../../components/input/formControl";
import { ColumnGrid, RowGrid } from "../../components/grid";
import { Table } from "../../components/table";
import { useState } from "react";
import { FormProduct } from "./components/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlertTime } from "../../components/modals/alertModal";
import { SidebarBody, BtnSidebar, SidebarItem, SidebarLayout } from "../../components/sidebar";
import { BtnModal } from "../../components/modals";

// data
import products from "../../data/products.json";

//functions
import { formatNumberMoney } from "./services/";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { formatDate } from "../../hooks/functions";
import { LoaderCircle } from "../../components/loading";
import { BtnLayoutSidbarHover, BtnLayoutSidbarHoverTable } from "../../components/sidebar/sideBarHover";
import { SidebarBodyProduct } from "./components/sidebarBody";

export const Inventory = () => {

  const { condition } = useParams();
  const appData = useSelector(state => state.appInfo);
  const distpach = useDispatch();


  const [dataProducts, setDataProducts] = useState(null)
  const [loadingProducts, setLoadingProducts] = useState(true)

  const [productSelected, setProductSelected] = useState(null)
  const [modal, setModal] = useState({
    statu: false,
    valide: false
  })
  const [showAlertDefault, setShowAlertDefault] = useState({
    statu: false,
    text: '',
    icon: Object
  })


  function editProduct(product) {
    setProductSelected(product)
    setModal({ ...modal, statu: true })
  }
  async function getProducts() {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const docs = []
      await querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      });
      setDataProducts(docs)
      // setDataFilter(docs)
      setLoadingProducts(false)
    } catch (error) {
      console.log(error)
    }
  }
  let interval;
  function timeOut() {
    setShowAlertDefault({ statu: false, text: '' });
    clearInterval(interval)
  }
  function CopyId(id) {
    clearInterval(interval)
    navigator.clipboard.writeText(id)
    if (showAlertDefault.statu) {
      setShowAlertDefault({ statu: false, text: '', icon: null });
    }
    setShowAlertDefault({ statu: true, text: 'Id : "' + id + '" Copiado a portapapeles', icon: faCheckCircle })
    interval = setInterval(timeOut, 2500)
  }
  function alert(Icon, Text) {
    setShowAlertDefault({ statu: true, text: Text && Text, icon: Icon && Icon })
    interval = setInterval(timeOut, 2500)
  }
  function init() {
    if (condition === 'create product') {
      setModal({ ...modal, statu: true })
    }
  }





  useEffect(() => {
    distpach(onChangeMethod('inventory'))
    init()

    getProducts()
  }, [])


  return (
    <>
      <Container>
        <HeaderPage>
          <h2>Gestor de inventario</h2>
          <p>Registra, actualiza, elimina y mucho mas</p>
          <BtnLeft>
            <Link to='/'>
              <ButtomCircle icon={faXmark} />
            </Link>
          </BtnLeft>
        </HeaderPage>
        {/* <BannerHeader>
          <ListCards>
            <Card title='Producto mas vendido este mes'>
              <h2>Huawei P40 Pro</h2>
              <h3>+245 ventas conluidas</h3>
              <h3>Ingreso total <b>s/ 56,544.65</b></h3>
              <h3><FontAwesomeIcon icon={faStar} /> Top 10</h3>
            </Card>
            <Card title='Producto con stock de -5'>
              <h2>Sony, Cable auxiliar</h2>
              <h3>3 en Stock</h3>
            </Card>
            <Card title='Producto mas vendido este mes'>
              <h2>Huawei P40 Pro</h2>
              <h3>+245 ventas conluidas</h3>
              <h3>Ingreso total <b>s/ 56,544.65</b></h3>
              <h3><FontAwesomeIcon icon={faStar} /> Top 10</h3>
            </Card>
            <Card title='Producto con stock de -5'>
              <h2>Sony, Cable auxiliar</h2>
              <h3>3 en Stock</h3>
            </Card>
          </ListCards>
        </BannerHeader> */}
        <Body>
          <Section>
            <NavBtns>
              <FormGroup style={{ width: '100px' }}>
                <BtnModal
                  modal={modal}
                  setModal={setModal}
                  Element={
                    <ButtonPrimary
                      onClick={() => setProductSelected(null)}
                      loading={modal.statu ? true : false}
                      icon={faAdd}
                      ClasName='primary'>Nuevo</ButtonPrimary>
                  }>
                  <FormProduct key={productSelected && productSelected.id} alert={alert} productData={productSelected} modal={modal} setModal={setModal} />
                </BtnModal>
              </FormGroup>
              <FormGroup>
                <ButtonPrimary ClasName='default'>
                  Editar
                </ButtonPrimary>
              </FormGroup>
              <FormGroup style={{ marginRight: 'auto' }}>
                <ButtonPrimary icon={faHistory} ClasName='default'>
                  Ultimas entradas
                </ButtonPrimary>
              </FormGroup>

              <FormGroup>
                <BtnSidebar Element={<ButtonPrimary IconImg='/user-profiles/daustinn.jpg' ClasName='default'>Importar & exportar</ButtonPrimary>}>
                  <SidebarLayout>
                    <SidebarBody>
                      <SidebarItem Icon={faFileExcel} Text='Exportar CSV' />
                      <SidebarItem Icon={faDatabase} Text='Exportar Backup - Tabla inventario' />
                    </SidebarBody>
                    <SidebarBody>
                      <SidebarItem Icon={faFileImport} Text='Importar registros (.json)' />
                      <SidebarItem Icon={faInfoCircle} Text='Mas informacion' />
                    </SidebarBody>
                  </SidebarLayout>
                </BtnSidebar>
              </FormGroup>
              <FormGroup>
                <ButtonPrimary icon={faDatabase} ClasName='primary'>
                  Generar Reporte
                </ButtonPrimary>
              </FormGroup>

            </NavBtns>
          </Section>
          {/* <Section>
            <FlexRow>
              <Posts title='Esta semana'>
                <AreaChart height='200px' data={data} />
              </Posts>
              <Posts title='Esta semana'>
                <LineChart colors={['#ff9137']} height='200px' data={data} />
              </Posts>
              <Posts title='Este mes'>
                <AreaChart colors={['#09a43d']} download='ss' height='200px' data={data} />
              </Posts>
              <Posts title='Este mes'>
                <LineChart colors={['#0995']} download='ss' height='200px' data={data} />
              </Posts>
            </FlexRow>
          </Section> */}
          <Section>
            <FormContainer>
              <RowGrid>
                <ColumnGrid w='12'>
                  <FormGroup>
                    <FormControl
                      placeholder='Buscar producto por Qr, Marca, Descripcion, categoria etc.'
                      iconImg={'/user-profiles/' + appData.profile}
                      iconImgHref={'/' + appData.username}
                      iconBtn={faSearch}
                      titleBtn='Buscar producto'
                    />
                  </FormGroup>
                </ColumnGrid>
              </RowGrid>
            </FormContainer>
          </Section>
          <Section>
            {
              loadingProducts ?
                <LoaderCircle />
                :
                <TablaContainer>
                  <Table maxHeigth='100%'>
                    <thead>
                      <tr>
                        <th className="id">id</th>
                        <th className="qr">Qr</th>
                        <th className="brand">Marca</th>
                        <th className="model">Modelo</th>
                        <th>Descripcion</th>
                        <th className="price">Precio Uni</th>
                        <th className="price2">Precio Total</th>
                        <th className="date">Fecha</th>
                        <th className="files">Fotos</th>
                        <th className="stock">Cant</th>
                      </tr>
                    </thead>
                    <tbody >
                      {
                        dataProducts &&
                        dataProducts.map(product =>
                          <BtnLayoutSidbarHoverTable key={product.id} sidebar={
                            <SidebarBodyProduct product={product}/>
                          }>
                            <td className="id"><BtnCopy onClick={() => CopyId(product.id)} title={"Copiar id : " + product.id}><FontAwesomeIcon icon={faCopy} /></BtnCopy></td>
                            <td onDoubleClick={() => editProduct(product)} className="qr">{product.codeQr}</td>
                            <td onDoubleClick={() => editProduct(product)} className="brand">{product.brand}</td>
                            <td onDoubleClick={() => editProduct(product)} className="model">{product.model}</td>
                            <td onDoubleClick={() => editProduct(product)} className="description">{product.description.slice(0, 90)}{product.description.length > 50 && '...'}</td>
                            <td onDoubleClick={() => editProduct(product)} className="price">{formatNumberMoney(product.salePrice)}</td>
                            <td onDoubleClick={() => editProduct(product)} className="price">{formatNumberMoney(product.salePrice * product.cuantity)}</td>
                            <td onDoubleClick={() => editProduct(product)} className="date">{formatDate(product.createdAt).slice(0, 10)}</td>
                            <td onDoubleClick={() => editProduct(product)} className="files">{product.dataFiles.length}</td>
                            <td onDoubleClick={() => editProduct(product)} className="stock">{product.cuantity}</td>
                          </BtnLayoutSidbarHoverTable>
                        )
                      }
                    </tbody>
                  </Table>
                </TablaContainer>
            }
          </Section>
        </Body>
      </Container>

       {/* modals  */}
      {
        showAlertDefault.statu &&
        <AlertTime icon={showAlertDefault.icon} text={showAlertDefault.text} />
      }
    </>
  )
}


const NavBtns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`
const ListCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
`
const BtnCopy = styled.div`
  background-color: var(--black-500);
  cursor: copy;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
const Container = styled.div`
  margin: .2rem;
  /* padding: .5rem; */
`
const HeaderPage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  h2{
    font-size: var(--size-16);
    margin: 0;
  }
  p{
    margin: 0;
    padding: 0;
    color: var(--write-500);
    font-size: var(--size-12);
    margin-left: 10px;
    line-height: 10px;
    margin-top: 5px;
  }
`
const BannerHeader = styled.div`
  display: flex;
  align-self: center;
  background: linear-gradient(0deg,  rgba(21, 21, 22, .8), rgba(21, 21, 22, .8)), url(/assets/dark-artstation-blur-deviantart.jpeg);
  background-position: center;
  background-size: cover;
  /* background-color: var(--black-300); */
  border: 1px solid var(--black-400);
  /* height: 200px; */
  border-radius: 10px;
  padding: 15px;
  display: flex;
  margin-bottom: 10px;
`
const BtnLeft = styled.div`
  margin-left: auto;
`
const Body = styled.div`

`
const Section = styled.section`
  display: flex;
 
  margin-bottom: .5rem;
  >div{
    width: 100%;
  }
  @media (max-width: 600px){
    flex-direction: column;
  }
`
const FormContainer = styled.div`
`
const TablaContainer = styled.div`
  width:100%;
  table{
      tr:hover .id{
        opacity: 1;
      }
        .id{
          width: 10px;
          text-align: center;
          padding-left: 10px;
          justify-content: center;
        }
        td.id{
          opacity: 0;
          justify-content: center;
        }
        .qr{
          width: 25px;
        }
        .brand{
          width: 50px;
        }
        .model{
          width: 150px;
        }
        .description{

        }
        .price{
          width: 150px;

        }
        .files{
          text-align: center;
          width: 13px;
        }
        .stock{
          width: 13px;
          text-align: center;
        }
  }
`
const FormGroup = styled.div`
  height: 100% !important;
`
const FlexRow = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
  >div{
    width: 100%;
  }
`