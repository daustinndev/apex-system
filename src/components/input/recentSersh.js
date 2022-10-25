import { useEffect } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory, faXmark } from "@fortawesome/free-solid-svg-icons";


// Component
import { useSelector } from "react-redux";
export const RecentSersh = ({ setValue }) => {
  function SetValue() {
    setValue(true)
  }
  useEffect(() => {
    SetValue()
  }, [])

  const data = useSelector(state => state.recentSearshSlice)

  return (
    <>
      <ContainerListRecent>
        <h3>Busquedas recientes</h3>
        <UlList>
          {
            data.map(d =>
              <LiItem key={d.id_}>
                <a href="">
                  <span>
                    <FontAwesomeIcon icon={faHistory} />
                  </span>
                  <p>{d.textSearsh}</p>
                  <button>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </a>
              </LiItem>
            )
          }
        </UlList>
      </ContainerListRecent>
    </>
  )
}


const ContainerListRecent = styled.div`
    h3{
      font-size: var(--size-14);
    }
`
const UlList = styled.ul`
  
`
const LiItem = styled.li`
  a{
    display: flex;
    align-items: center;
  }
  padding: .2rem .5rem ;
  margin: .2rem ;
  border-radius: 6px;
  cursor: pointer;
  &:hover{
    background-color: var(--black-600);
  }
  span{
    font-size: var(--size-12);
    color: var(--write-400);
  }
  p{
    font-size: var(--size-12);
    color: var(--write-100);
  }
  button{
    margin-left: auto;
    background-color: transparent;
    border: 0;
    outline: 0;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: var(--write-100);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
      background-color: var(--black-700);
    }
  }
`