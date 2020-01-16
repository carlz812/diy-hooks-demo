import React from "react";
import ReactDOM from "react-dom";

const render = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
  effectCursor = 0;
};

const allDeps = [];
let effectCursor = 0;

/** start */
let memoizedState = [];
let cursor = 0;

const useState = initialValue => {
  // memoizedState[cursor] = memoizedState[cursor] || initialValue;
  // const currentCursor = cursor;
  function dispatch(newValue) {
    // memoizedState[currentCursor] = newValue;
    // cursor = 0;
    // render();
  }
  // return [memoizedState[cursor++], dispatch];
};

function useEffect(callback, deps) {
  if (!allDeps[effectCursor]) {
    // 初次渲染：赋值 + 调用回调函数
    allDeps[effectCursor] = deps;
    effectCursor++;
    callback();
    return;
  }

  const currentEffectCursor = effectCursor;
  const rawDeps = allDeps[currentEffectCursor];

  // 检测依赖项是否发生变化，发生变化需要重新 render
  const isChanged = rawDeps.some((dep, index) => dep !== deps[index]);
  if (isChanged) {
    allDeps[currentEffectCursor] = deps;
    callback();
  }

  effectCursor++;
}

const App = () => {
  const [firstName, setFirstName] = useState("Rudi");
  const [lastName, setLastName] = useState("Yardley");

  // useEffect 在每次渲染后都会执行
  // useEffect(() => {
  //   console.log(`useEffect`);
  // });

  useEffect(() => {
    console.log(`your firstName is ${firstName}`);
  }, [firstName]);

  useEffect(() => {
    console.log(`your lastName is ${lastName}`);
  }, [lastName]);

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
