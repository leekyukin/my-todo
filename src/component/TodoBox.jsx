import React, {useContext, useState} from 'react';
import {TodoContext} from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoBox = () => {

  const {list, setList} = useContext(TodoContext);

  return (
    <div className="todo-box">
      {
        list.map(item => <TodoItem text={item}/>)
      }
    </div>
  );
};

export default TodoBox;
