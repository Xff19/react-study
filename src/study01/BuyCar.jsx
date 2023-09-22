import React, { useEffect,useCallback } from "react";
import List from "../component/List/";
import axios from "axios";
import { useImmer } from "use-immer";

export default function BuyCar() {
  const [list, setList] = useImmer([]);
  useEffect(() => {
    axios.get("./carData.json").then((res) => {
      if (res.data.errcode === 0) {
        setList(res.data.list.map((item) => ({ ...item, active: false })));
      }
    });
  }, []);
  const add = useCallback((id) => {
    setList(
      (list)=>{
      list.map((item) => {
        if (item.id === id) {
          return (item.active = !item.active);
        } else {
          return item;
        }
      })}
    );
  },[]);
  const changeHandle=useCallback((id,num)=>{
    setList((list)=>{
      list.map(item=>{
        if(item.id===id){
          return item.number+=num
        }else{
          return item
        }
      })
    })
  },[]);
  return (
    <div style={{ width: "100%" }}>
      <div>
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {list.map((item, index) => {
            return (
              <List
                key={item.id}
                list={item}
                add={
                add}
                  changeHandle={changeHandle}
              ></List>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
