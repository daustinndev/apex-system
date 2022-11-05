import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { onChangeMethod } from "../../features/nav/navSlice";

export const Saved = () => {


  const distpach = useDispatch();

  function init() {
    // if (condition === 'create product') {
    //   setModal({ ...modal, statu: true })
    // }
  }

  useEffect(() => {
    distpach(onChangeMethod('saved'))
    init()

  }, [])
  return (
    <>
        <h1>Saved</h1> 
    </>
  )
}
