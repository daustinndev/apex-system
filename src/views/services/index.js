import { onChangeMethod } from "../../features/nav/navSlice";
import { useDispatch } from "react-redux";

export const Services = () => {
  const dispatch = useDispatch();
  dispatch(onChangeMethod('services'));
  return (
    <>
      <h1>Services</h1>
    </>
  )
}

