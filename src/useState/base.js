import React, { useState } from "react";
import ReactDOM from "react-dom";

const render = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
};

const App = () => {
  // 接收 state 初始值，返回当前的 state 以及更新 state 的函数
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click me to set count
        </button>
      </div>
    </>
  );
};

render();
