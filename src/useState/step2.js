import React from "react";
import ReactDOM from "react-dom";

const render = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
};

let state;
const useState = initialValue => {
  state = state || initialValue;
  function dispatch(newValue) {
    state = newValue;
    render();
  }
  return [state, dispatch];
};

const App = () => {
  // 多次调用 useState 时，会出现异常，因为当前的实现只能缓存一个值 -> 改造
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
