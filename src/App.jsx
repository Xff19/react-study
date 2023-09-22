import { useState, useRef } from "react";
import "./App.css";
// import Todos from "./todos"
// import ListConent from "./listconent";
// import ListHead from "./listhead";
// import ListProvider from "./ListProvider";
import BuyCar from './study01/BuyCar'
// import ButtonAdd from "./ant/button";
// // import { Button } from "antd";
// import { QfButton } from "./QfAnt";

function App() {
  // const num=useRef(0)//它是一个对象
  // const myRef=useRef(null)
  // const [count, setCount] = useState(0);
  // const handleClick=()=>{
  //   setCount(count+1)//0+1
  //   setCount(count+1)//0+1
  //   console.log(count);//0
  //   setCount((c)=>c+1)//0+1
  //   setCount((c)=>c+1)//1+1
  //   console.log(count);//0
  // }
  // const handle=()=>{
  //   num.current++
  //   console.log(num.current);
  //   console.log(myRef.current);
  // }
  return (
    <div>
      {/* <button onClick={handleClick}>{count}</button> */}
      {/* <Todos/> */}
      {/* <button onClick={handle}></button>
     <div ref={myRef}>myref</div> */}
      {/* hello */}
      {/* <ListProvider>
        <ListHead />
        <ListConent />
      </ListProvider> */}
      <BuyCar/>
     {/* <QfButton>button1</QfButton>
      <ButtonAdd></ButtonAdd> */}
    </div>
  );
}

export default App;
