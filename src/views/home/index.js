import { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { onChangeMethod } from "../../features/nav/navSlice";
import { useAuth } from '../../context/authContext';

// components

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onChangeMethod('home'));
  }, [])
  const {user} = useAuth()
  
  return (
    
    <>
      <ContainerDashboard>
        <h1>Home</h1>
        <p>{user && user.email}</p>
        <p>{user && user.displayName}</p>
        <img src={user && user.photoURL} alt="" />
      </ContainerDashboard>
    </>
  )
}

const ContainerDashboard = styled.div`
    width: 100%;
    position: relative;
    
`