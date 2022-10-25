import { onChangeMethod } from "../../features/nav/navSlice";
import { useDispatch } from "react-redux";


export const SaleCart = () => {
  const dispatch = useDispatch();
  dispatch(onChangeMethod('sale-cart'));
  return (
    <>
      <h1>Sale Cart</h1>
    </>
  )
}
