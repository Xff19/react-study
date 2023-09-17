import React, { useState } from "react";

export default function Todos() {
  const [value, setValue] = useState("");
  const [todoList, setToDdoList] = useState([]);
  const ToDdoList = todoList.filter((item) => !item.checked);
  const DidList = todoList.filter((item) => item.checked);
  const inputValue = (e) => {
    setValue(e.target.value);
  };
  const checkedChange = (e, id) => {
    const list = [...todoList];
    list.find((item) => item.id === id).checked = e.target.checked;
    setToDdoList(list);
  };
  const todoListAdd = () => {
    setToDdoList([...todoList, { id: todoList.length, value, checked: false }]);
  };
  return (
    <div>
      <input type="text" value={value} onChange={inputValue} />
      <button onClick={todoListAdd}>添加按钮</button>
      <h1>未完成任务：个</h1>
      <ul>
        {ToDdoList.map((item, index) => (
          <li key={index}>
            <input
              type="checkBox"
              checked={item.checked}
              onChange={(e) => {
                checkedChange(e, item.id);
              }}
            />
            {item.value}
          </li>
        ))}
      </ul>
      <h1>已完成任务：个</h1>
      <ul>      
        {DidList.map((item, index) => (
          <li key={index}>
            <input
              type="checkBox"
              checked={item.checked}
              onChange={(e) => {
                checkedChange(e, item.id);
              }}
            />
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
