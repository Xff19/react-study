import React,{memo} from "react";
import style from "../style/car.module.css";
const List=memo( function List({ list, add, changeHandle }) {
  let active = "";
  if (list.active) {
    active = style.active;
  } else {
    active = style.inactive;
  }
  return (
    <div>
      <div className={`${style.borderColor} ${active}`}>
        <h2>{list.name}</h2>
        <p>单价：{list.price}</p>
        <p>
          数量：
          <span onClick={() => changeHandle(list.id, -1)}>-</span>
          {list.number}
          <span onClick={() => changeHandle(list.id, 1)}>+</span>
        </p>
        <button className={style.btnBg} onClick={() => add()}>
          {list.active ? "取消购买" : "添加到购物车"}
        </button>
      </div>
    </div>
  );
})
export default List
