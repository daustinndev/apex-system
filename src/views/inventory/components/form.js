import { faAdd, faBarcode, faChevronLeft, faDollar, faImage, faKey, faPlus, faRefresh, faSave, faTextHeight, faUserGear, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';

import { Alert } from "../../../components/alert";
import { ButtomCircle, ButtonPrimary } from '../../../components/buttons';
import { ColumnGrid, RowGrid } from '../../../components/grid';
import { Combobox, FormControl, TextArea } from '../../../components/input/formControl';
import { LoaderCircle, LoaderRelative } from '../../../components/loading';
import { ModalBodyItem, ModalBody, ModalFooter, ModalHeader, ModalHeaderItem, ModalLayout, BtnModal } from '../../../components/modals';

import { collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject } from 'firebase/storage'

import { db, storage } from "../../../firebase/config";

import { formatNumberMoney } from '../../../hooks/functions';
import { useAuth } from '../../../context/authContext';
import { ModalBodyIntegrated, ModalBodyItemIntegrated, ModalFooterIntegrated, ModalHeaderIntegrated, ModalHeaderItemIntegrated, ModalLayoutIntegrated } from '../../../components/modals/Integrated';
import { v4 } from 'uuid';

export const FormProduct = ({ modal, setModal, productData, alertDefault }) => {
    // states
    const [modalIntegrated1, setModalIntegrated1] = useState(false)

    const { user } = useAuth()
    const storage = getStorage();

    const [categories, setCategories] = useState([])
    const [suppliers, setSuppliers] = useState([])

    const [loading, setLoading] = useState(true)
    const [loadingCreate, setLoadingCreate] = useState(false)
    const [filesObj, setFilesObj] = useState([])

    const [files, setFiles] = useState(productData ? productData.dataFiles : [])
    const [product, setProduct] = useState(
        productData ? productData : {
            codeQr: "",
            adminId: user && user.uid,
            brand: "",
            categoryId: "9JMvFNmNlZwYl0DiynP6",
            model: "",
            title: "",
            supplierId: "xNia5hlFJXuPRU7Tb0An",
            dataFiles: [],
            description: "",
            caracteristicas: "",
            costPrice: "0",
            salePrice: "0",
            cuantity: 1,
            priceTotal: "0",
            stock: 1,
            gain: "0",
        })
    const [filesDelete, setfilesDelete] = useState([])

    const [error, setError] = useState({
        title: "",
        description: "",
        header: "",
        type: "",
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        validateData()
    }
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
            priceTotal: (product.costPrice * product.cuantity),
            gain: (product.salePrice - product.costPrice) * product.cuantity

        })
        setModal({ ...modal, valide: true })
    }
    const CalculePrice = (e) => {
        e.preventDefault()
        setProduct({
            ...product,
            priceTotal: (product.costPrice * product.cuantity),
            gain: (product.salePrice - product.costPrice) * product.cuantity
        })
    }


    const handleFile = (e) => {
        const filesTemp = Object.values(e.target.files)
        const filesNew = []
        const filesNewObj = []
        filesTemp.forEach(file => {
            filesNew.push({ fileName: '', fileUri: URL.createObjectURL(file) })
            filesNewObj.push(file)
            setFiles(filesNew.concat(files))
            setFilesObj(filesNewObj.concat(filesObj))
        })
        setModal({ ...modal, valide: true })
    }


    const deleteFile = (file) => {

        let index = files.indexOf(file)
        const elementNewObj = [...filesObj.slice(0, index), ...filesObj.slice(index += 1, filesObj.length)]
        setFilesObj(elementNewObj)
        deleteFiles(file)

        if (productData) {
            setfilesDelete([...filesDelete, file])
        }
    }
    function deleteFiles(file) {
        let index = files.indexOf(file)
        const elementNew = [...files.slice(0, index), ...files.slice(index += 1, files.length)]
        setFiles(elementNew)
    }


    const getCategory = async () => {
        const querySnapshot = await getDocs(collection(db, "categories"));
        const docs = []

        await querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
            setCategories(docs)
            setLoading(false)
        });
    }
    const getSupplier = async () => {
        const querySnapshot = await getDocs(collection(db, "supplier"));
        const docs = []

        await querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
            setSuppliers(docs)
            setLoading(false)
        });
    }


    function validateData() {
        product.costPrice < 1 ?
            setError({ title: "Alerta", header: "Campo invalido", description: "El precio costo no puede ser menor a 0 \n\nPor favor valida el campo", type: "warning" })
            :
            product.salePrice < 1 ?
                setError({ title: "Alerta", header: "Campo invalido", description: "El precio costo no puede ser menor a 0 \n\nPor favor valida el campo", type: "warning" })
                :
                product.cuantity < 1 ?
                    setError({ title: "Alerta", header: "Campo invalido", description: "La Cantidad de producto no puede ser menor a  0 \n\nPor favor valida el campo", type: "warning" })
                    :
                    addFiles();
    }
    async function addFiles() {


        setLoadingCreate(true)
        let filesNames = [...product.dataFiles];
        let productTemp = {}
        let productTempDelete = [...filesDelete]

        // console.log(filesDelete)
        if (filesDelete) {
            try {
                productTempDelete.forEach(async file => {
                    const desertRef = ref(storage, 'products/' + file.fileName);
                    await deleteObject(desertRef)
                })
            } catch (error) {
                console.log(error)
                setError({ title: "Error", header: "Error al eliminar el archivo", description: "Ops, Ocurrio un problema al eliminar las imagenes \n\n Comunicate con el Administrador", type: "error" })
            }
        }
        console.log(filesDelete)
        // Si hay Archivos 
        if (filesObj.length > 0) {
            let index = 0;
            try {
                filesObj.forEach(async file => {
                    const name = v4()
                    const storageRef = ref(storage, '/products/' + name)
                    await uploadBytes(storageRef, file)
                    const url = await getDownloadURL(storageRef)
                    filesNames.push({ fileName: name, fileUri: url })
                    index = index + 1
                    if (index === filesObj.length) {
                        productTemp = { ...product, dataFiles: filesNames }
                        setProduct(productTemp)
                        productData ? updateProduct(productTemp) : addProduct(productTemp);
                    }
                })
            } catch (error) {
                console.log(error)
                setError({ title: "Error", header: "Error de subir", description: "Ops, Ocurrio un problema al guardar las imagenes \n\n Comunicate con el Administrador", type: "error" })
            }
        }
        // si no hay archivos
        else {
            productData ? updateProduct(product) : addProduct(product);
        }
    }
    async function addProduct(productTemp) {
        const productTempEnd = { ...productTemp, createdAt: new Date() }
        try {
            const docRef = await addDoc(collection(db, "products"), productTempEnd);
            setLoadingCreate(false)
            setModal(false)
            alertDefault(faSave, `Producto "${docRef.id}" guardado correctamente`)
        } catch (error) {
            console.log(error)
            setError({ title: "Error", header: "Error al guardar", description: "Ops, Ocurrio un problema al guardar el producto \n\n Comunicate con el Administrador", type: "error" })
        }
    }
    async function updateProduct(productTemp) {
        try {
            const washingtonRef = doc(db, "products", productTemp.id);
            await updateDoc(washingtonRef, productTemp);
            setLoadingCreate(false)
            setModal(false)
            alertDefault(faSave, `Producto "${productTemp.id}" guardado actualizado `)
        } catch (error) {
            console.log(error)
            setError({ title: "Error", header: "Error al guardar", description: "Ops, Ocurrio un problema al guardar el producto \n\n Comunicate con el Administrador", type: "error" })
        }
    }

    useEffect(() => {
        getCategory()
        getSupplier()
    }, [])

    return (
        <ModalLayout title='Modal' w='500'>
            <ModalHeader title='Registrar producto' modal={modal} setModal={setModal} icon={faChevronLeft} />
            {
                loading ?
                    <LoaderContainer>
                        <LoaderCircle />
                    </LoaderContainer> :
                    <form onSubmit={handleSubmit}>
                        <ModalBody>
                            <ModalHeaderItem title='MetaDatos' description='Codigo , admin y otros' />
                            <ModalBodyItem>
                                <RowGrid>
                                    <ColumnGrid w='6'>
                                        <FormGroup>
                                            <FormControl
                                                iconSvg={faKey}
                                                cursor='default'
                                                onValue={productData ? productData.id : 'Automatico'}
                                                disabled
                                                required
                                                placeholderLabel='Codigo'
                                            />
                                        </FormGroup>
                                    </ColumnGrid>

                                    <ColumnGrid w='6'>
                                        <FormGroup>
                                            <FormControl
                                                onValue={user.displayName ? user.displayName : user.email}
                                                cursor='default'
                                                iconImgHref='/user'
                                                iconImg={user.photoURL ? user.photoURL : '/assets/no-profile.png'}
                                                disabled
                                                required placeholderLabel='Administrador' />
                                        </FormGroup>
                                    </ColumnGrid>
                                </RowGrid>
                            </ModalBodyItem>
                            <ModalHeaderItem
                                title='Producto'
                                description='Nombre , Descripcion , caregoria etc' />
                            <ModalBodyItem>
                                <RowGrid>
                                    <ColumnGrid w='6'>
                                        <FormGroup>
                                            <FormControl
                                                onValue={product.codeQr}
                                                iconBtn={faAdd}
                                                titleBtn='Generar Codigo Qr'
                                                // onclickBtn={() => alert('Generate codeQr')}
                                                name='codeQr'
                                                onChange={handleChange}
                                                // iconSvg={faBarcode}
                                                autoFocus={true}
                                                placeholderLabel='Codigo Qr' />
                                        </FormGroup>
                                    </ColumnGrid>
                                    <ColumnGrid w='3'>
                                        <FormGroup >
                                            <FormControl
                                                onValue={product.brand}
                                                required
                                                name='brand'
                                                onChange={handleChange}
                                                placeholderLabel='Marca'
                                            />
                                        </FormGroup>
                                    </ColumnGrid>
                                    <ColumnGrid w='3'>
                                        <FormGroup >
                                            <FormControl
                                                onValue={product.model}
                                                name='model'
                                                onChange={handleChange}
                                                placeholderLabel='Modelo'
                                            />
                                        </FormGroup>
                                    </ColumnGrid>
                                </RowGrid>
                                <RowGrid>
                                    <ColumnGrid w='4'>
                                        <FormGroup style={{ marginTop: '5px' }}>
                                            <FormControl
                                                onValue={product.title}
                                                name='title'
                                                onChange={handleChange}
                                                placeholderLabel='Titulo (opcional)'
                                            />
                                        </FormGroup>
                                    </ColumnGrid>
                                    <ColumnGrid w='4'>
                                        <FormGroup style={{ marginTop: '5px' }}>
                                            <Combobox
                                                // titleBtn='Agregar nueva categoria'
                                                // iconBtn={faPlus}
                                                onValue={product.categoryId}
                                                name='categoryId'
                                                onChange={handleChange}
                                                placeholderLabel='Categoria'
                                            >
                                                {categories.map(category =>
                                                    <option key={category.id} value={category.id}>{category.name}</option>
                                                )}
                                            </Combobox>
                                        </FormGroup>
                                    </ColumnGrid>
                                    <ColumnGrid w='4'>
                                        <FormGroup style={{ marginTop: '5px' }}>
                                            <Combobox
                                                onValue={product.supplierId}
                                                name='supplierId'
                                                onChange={handleChange}
                                                placeholderLabel='Proveedor'
                                            >
                                                {suppliers.map(supplier =>
                                                    <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
                                                )}
                                            </Combobox>
                                        </FormGroup>
                                    </ColumnGrid>
                                </RowGrid>
                            </ModalBodyItem>
                            <ModalHeaderItem title='Precio' description='Nombre, Stock , Ganancia, etc' />
                            <ModalBodyItem>
                                <RowGrid>
                                    <ColumnGrid w='4'>
                                        <FormGroup>
                                            <FormControl
                                                onValue={product.costPrice}
                                                name='costPrice'
                                                onChange={handleChange}
                                                pattern='^[0-9]+$'
                                                type='number'
                                                iconSvg={faDollar}
                                                required
                                                placeholder='0.00'
                                                placeholderLabel='Precio costo' />
                                        </FormGroup>
                                    </ColumnGrid>
                                    <ColumnGrid w='4'>
                                        <FormGroup>
                                            <FormControl
                                                onValue={product.salePrice}
                                                name='salePrice'
                                                onChange={handleChange}
                                                pattern='^[0-9]+$'
                                                type='number'
                                                iconSvg={faDollar}
                                                required
                                                placeholder='0.00'
                                                placeholderLabel='Precio Venta' />
                                        </FormGroup>
                                    </ColumnGrid>
                                    <ColumnGrid w='4'>
                                        <FormGroup>
                                            <FormControl
                                                onValue={product.cuantity}
                                                name='cuantity'
                                                onChange={handleChange}
                                                mminLength={1}
                                                required
                                                type='number'
                                                placeholder='1'
                                                placeholderLabel='Cant' />
                                        </FormGroup>
                                    </ColumnGrid>
                                </RowGrid>
                            </ModalBodyItem>
                            <ModalHeaderItem title='Precio Total' description='Ganacia, y precio total' />
                            <ModalBodyItem>
                                <RowGrid>
                                    <ColumnGrid w='4'>
                                        <FormGroup >
                                            <FormControl
                                                onValue={formatNumberMoney(product.priceTotal)}
                                                name='priceTotal'
                                                onChange={handleChange}
                                                cursor='default'
                                                disabled
                                                pattern='^[0-9]+$'
                                                type='text'
                                                placeholder='0.00'
                                                placeholderLabel='Precio total' />
                                        </FormGroup>
                                    </ColumnGrid>
                                    <ColumnGrid w='4'>
                                        <FormGroup >
                                            <FormControl
                                                onValue={formatNumberMoney(product.gain)}
                                                name='gain'
                                                onChange={handleChange}
                                                cursor='default'
                                                colorText={product.gain < 1 ? 'var(--red-100)' : 'var(--green-100)'}
                                                disabled
                                                title={product.gain < 1 ? 'Hay perdidas de dinero' : ''}
                                                pattern='^[0-9]+$'
                                                type='text'
                                                placeholder='0.00'
                                                placeholderLabel='Ganancia Total' />
                                        </FormGroup>
                                    </ColumnGrid>
                                    <ColumnGrid w='4'>
                                        <FormGroup style={{ marginTop: '20px' }} >
                                            <ButtonPrimary onClick={CalculePrice} ClasName='default'>
                                                Recalcular
                                            </ButtonPrimary>
                                        </FormGroup>
                                    </ColumnGrid>
                                </RowGrid>
                            </ModalBodyItem>
                        </ModalBody>
                        <ModalFooter>
                            <RowGrid w='100%'>
                                <ColumnGrid w='12'>
                                    <FormGroup>
                                        <ButtonPrimary
                                            ClasName='default'
                                            icon={faAdd}
                                            onClick={(e) => { e.preventDefault(); setModalIntegrated1(true) }}
                                        >
                                            Agregar fotos y descripcion
                                        </ButtonPrimary>
                                    </FormGroup>
                                </ColumnGrid>
                            </RowGrid>
                            <RowGrid w='100%'>
                                <ColumnGrid w='12'>
                                    <FormGroup>
                                        <ButtonPrimary
                                            type='submit'
                                            ClasName={productData ? 'success' : 'primary'}
                                        >{productData ? 'Actualizar' : 'Registrar'}</ButtonPrimary>
                                    </FormGroup>
                                </ColumnGrid>
                            </RowGrid>
                        </ModalFooter>
                    </form>
            }
            {
                error.title &&
                // alert
                <Alert
                    onClick={() => setError('')}
                    error={error}
                    btnTitle='Aceptar'
                >
                </Alert>
            }
            {
                //modal integrated
                modalIntegrated1 &&
                <ModalLayoutIntegrated setModel={setModalIntegrated1} w='450px'>
                    <ModalHeaderIntegrated title='Agregar fotos y descripcion' icon={faChevronLeft} modal={modalIntegrated1} setModal={setModalIntegrated1} />
                    <ModalBodyIntegrated>
                        <ModalHeaderItemIntegrated title='Multimedia' description='Agregar descripcion y fotos' />
                        <ModalBodyItemIntegrated>
                            <RowGrid>
                                <ColumnGrid w='6'>
                                    <FormGroup style={{ marginTop: '5px' }}>
                                        <TextArea
                                            onValue={product.description}
                                            name='description'
                                            onChange={handleChange}
                                            minHeigth='150px'
                                            placeholderLabel='Descripcion'
                                        />
                                    </FormGroup>
                                </ColumnGrid>
                                <ColumnGrid w='6'>
                                    <FormGroup style={{ marginTop: '5px' }}>
                                        <TextArea
                                            onValue={product.caracteristicas}
                                            name='caracteristicas'
                                            onChange={handleChange}
                                            minHeigth='150px'
                                            placeholderLabel='Caracteristicas'
                                        />
                                    </FormGroup>
                                </ColumnGrid>
                            </RowGrid>
                            <RowGrid>
                                <ColumnGrid w='12'>
                                    <FormGroup style={{ marginTop: '5px' }}>
                                        <FormControlFile>

                                            <FormControl
                                                multiple
                                                accept='image/*'
                                                onChange={handleFile}
                                                id='htehefwrg'
                                                type='file'
                                                placeholderLabel='Imagenes'
                                            />
                                            {
                                                files.length > 0 &&
                                                <div className="ContainerImage">
                                                    <img src={files.length > 0 ? files[0].fileUri : "/assets/no-image.png"} alt="" />
                                                </div>
                                            }
                                            {
                                                files.length < 1 &&
                                                <label htmlFor="htehefwrg" style={{ cursor: 'pointer' }}>
                                                    <div title='Agregar imagenes' className="ContainerImage">
                                                        <img src="/assets/no-image.png" alt="" />
                                                    </div>
                                                </label>
                                            }
                                            {
                                                files.length > 0 &&
                                                <>
                                                    <BtnCount>
                                                        <ButtomCircle text={files.length} />
                                                    </BtnCount>
                                                </>
                                            }
                                            <ContainerListImages>
                                                <ListImage lengh={files.length} className='listImage'>
                                                    {
                                                        files.length > 0 &&
                                                        <label title='Agregar imagenes' htmlFor='htehefwrg'>
                                                            <ItemAdd onclick={() => console.log('first')}>
                                                                <FontAwesomeIcon icon={faImage} />
                                                            </ItemAdd>
                                                        </label>
                                                    }
                                                    {
                                                        files.length > 0 &&
                                                        files.map(file =>
                                                            <ItemPhoto key={file.fileUri} title={file.fileName && `Nombre: ${file.fileName}\nUri: ${file.fileUri.slice(0, 45)}...`}>
                                                                <img src={file.fileUri} alt="" />
                                                                <ButtomCircle onClick={() => deleteFile(file)} onclick={null} icon={faXmark} />
                                                            </ItemPhoto>
                                                        )
                                                    }
                                                </ListImage>
                                            </ContainerListImages>
                                        </FormControlFile>
                                    </FormGroup>
                                </ColumnGrid>
                            </RowGrid>
                        </ModalBodyItemIntegrated>
                        <ModalFooterIntegrated>

                        </ModalFooterIntegrated>
                        <RowGrid>
                            <ColumnGrid w='12'>
                                <FormGroup>
                                    <ButtonPrimary onClick={() => setModalIntegrated1(false)} ClasName='primary'>
                                        Aceptar
                                    </ButtonPrimary>
                                </FormGroup>
                            </ColumnGrid>
                        </RowGrid>
                    </ModalBodyIntegrated>
                </ModalLayoutIntegrated>
            }
            {
                loadingCreate &&
                <LoaderRelative />

            }
        </ModalLayout>
    )
}

const LoaderContainer = styled.div`
    max-width: 100px;
    padding: 20px;
    margin: 0 auto;
`
const ContainerListImages = styled.div`
    position: absolute;
    bottom: 5px;
    max-width: 100%;
`
const ListImage = styled.div`
    background-color: var(--black-200);
    border: 1px solid var(--black-300);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    overflow: hidden;
    overflow-x: auto;
    transition: .5s opacity;
    opacity: 0;
    margin: 0 10px;
    &::-webkit-scrollbar{
        background-color: transparent;
        height: 7px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: var(--black-600);
        border-radius: 5px;
    }
`
const ItemPhoto = styled.div`
    cursor: default;
    max-width: 70px;
    min-width: 70px;
    height: 70px;
    overflow: hidden;
    background-color: var(--black-000);
    border: 1px solid var(--black-200);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    &:hover{
        border: 1px solid var(--black-400);
    }
    img{
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
    &:hover >div{
        opacity: 1;
    }
    >div{
        opacity: 0;
        position: absolute;
    }
    
`
const ItemAdd = styled.div`
    cursor: pointer;
    max-width: 70px;
    min-width: 70px;
    height: 70px;
    border-radius: 7px;
    background-color: var(--black-300);
    border:1px solid var(--black-600);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        border:1px solid var(--black-700);
    }
    svg{
        color: var(--write-300);
        font-size: var(--size-25);
    }
`
const BtnCount = styled.div`
    position: absolute;
    padding: 8px;
    top: 20px;
    left: 0;
    transition: .2s opacity;
    opacity: 1;
`
const FormGroup = styled.div`
  height: 100% !important;
`
const FormControlFile = styled.div`
    position: relative;
    &:hover .listImage{
        opacity: 1;
    }
    &:hover .btnAdd{
        opacity: 1;
    }
    input{
        display: none;
    }
    label{
        height: 100%;
    }
    .ContainerImage{
        border: 1px solid var(--black-600);
        background-color: var(--black-200);
        border-radius: 6px;
        overflow: hidden;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            max-width: 100%;
            width: auto;
            height: auto;
            max-height: 100%;
        }
     }
`

