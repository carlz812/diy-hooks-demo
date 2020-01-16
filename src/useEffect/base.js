import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const render = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
};

const App = () => {
  const [firstName, setFirstName] = useState("Rudi");
  const [lastName, setLastName] = useState("Yardley");

  // useEffect 在每次渲染后都会执行
  useEffect(() => {
    console.log(`useEffect`);
  });

  // useEffect 接收两个参数，第二个参数为可选参数，接收一个数组
  // 如果传入了第二个参数，React 将对渲染前后数组中的每一项进行比较，如果有任意一项发生了变化，则会运行当前的 useEffect
  useEffect(() => {
    console.log(`your firstName is ${firstName}`);
  }, [firstName]);

  return (
    <>
      <div>
        <p>your first name is {firstName}</p>
        <button onClick={() => setFirstName("Fred")}>Fred</button>
      </div>
      <div>
        <p>your last name is {lastName}</p>
        <button onClick={() => setLastName("Bing")}>Bing</button>
      </div>
    </>
  );
};

render();
