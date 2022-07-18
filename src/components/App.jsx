import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/exampleSlice";

function App() {
  const value = useSelector((state) => state.example.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(increment);
  }, []);

  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}

export default App;