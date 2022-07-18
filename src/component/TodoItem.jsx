import React, {useContext} from 'react';
import {TodoContext} from "../context/TodoContext";

const TodoItem = (props) => {

  const {list, setList} = useContext(TodoContext);

  const removeItem = () => {

  }

  return (
    <div className="todo-row ">
      <div
        className="todo-item">
        {props.text}
      </div>
      <div
        className="done-btn"
        onClick={removeItem}>
        DONE
      </div>
    </div>
  );
};

export default TodoItem;
