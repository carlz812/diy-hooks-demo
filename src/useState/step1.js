import React from "react";
import ReactDOM from "react-dom";

const render = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
};

// let state;
const useState = initialValue => {
  // 接收初始值，首次加载返回初始值，后续有更新返回更新后值
  // state = state || initialValue;
  // dispatch 方法，修改对应的 state 值
  // function dispatch(newValue) {
  //   更新缓存的 state 值
  //   state = newValue;
  //   render();
  // }
  // return [state, dispatch];
};

const App = () => {
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
          Click me
        </button>
      </div>
    </>
  );
};

render();
