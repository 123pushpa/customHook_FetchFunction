import "./styles.css";
import useCustomHook from "./useCustomHook";

export default function App() {
  const url = "https://dummyjson.com/products";

  const handleCustomHook = useCustomHook(url);
  console.log(handleCustomHook);

  return (
    <>
      <h3>CUSTOM HOOK</h3>
      <button>FETCH</button>
    </>
  );
}
