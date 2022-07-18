import React, {useContext, useState} from 'react';
import {TodoContext} from "../context/TodoContext";

const TodoInput = () => {

  const {list, setList} = useContext(TodoContext);
  const [todo, setTodo] = useState('');

  const addTodo = (e) => {
    if (todo !== '') {
      setList([...list, todo]);
      console.log(list);
      setTodo('');
      e.target.value = '';
    }
  }

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo(e);
    }
  }

  const clearAll = () => {
    setList([]);
  }

  return (
    <div className="todo-input">
      <input
        className="text-input"
        type="text"
        placeholder="할 일을 입력하세요.."
        onChange={event => setTodo(event.target.value)}
        onKeyPress={onKeyPress}
        autoFocus/>
      <input
        className="input-btn"
        type="button"
        value="CLEAR"
        onClick={clearAll}/>
    </div>
  );
};

export default TodoInput;
