import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callToApi } from "./callToApiSlice";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(callToApi());
  }, []);
  const data = useSelector((state) => state);
  const hanlderHalf = () => {
    dispatch({ type: "recipies/removeHalf" });
    console.log(data);
  };
  return (
    <>
      <h1>this is my home</h1>
      <button onClick={() => hanlderHalf()}>remove half</button>
    </>
  );
}
export default Home;
