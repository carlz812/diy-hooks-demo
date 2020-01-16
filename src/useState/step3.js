import React from "react";
import ReactDOM from "react-dom";

const render = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
};

/** start */
// 将单个 staet 缓存进行扩展，改造为数组
let memoizedState = [];
// cursor 指针的数值代表 调用 useState 的顺序
let cursor = 0;

const useState = initialValue => {
  // memoizedState[cursor] = memoizedState[cursor] || initialValue;
  // const currentCursor = cursor;
  function dispatch(newValue) {
    //   memoizedState[currentCursor] = newValue;
    //   每次更新 state 之后触发 render 事件，将 cursor 重置为 0
    //   cursor = 0;
    //   render();
  }
  // 返回后进行更新
  // return [memoizedState[cursor++], dispatch];
};

/** end */

const App = () => {
  const [firstName, setFirstName] = useState("Rudi");
  const [lastName, setLastName] = useState("Yardley");
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
