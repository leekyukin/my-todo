import './App.css';
import TodoInput from "./component/TodoInput";
import {TodoContext} from "./context/TodoContext";
import {useState} from "react";
import TodoBox from "./component/TodoBox";

function App() {
  let [list, setList] = useState([]);

  return (
      <div className="App">
        <TodoContext.Provider value={{list, setList}}>
            <section>
              <TodoInput />
              <TodoBox />
            </section>
        </TodoContext.Provider>
      </div>
  );
}

export default App;
