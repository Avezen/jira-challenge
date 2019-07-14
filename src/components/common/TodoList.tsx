import React from 'react'
import Todo from './Todo'
import { ITodo } from '../../types/ITodo'

const TodoList = (
    {todos, toggleTodo} : {todos: ITodo[], toggleTodo: any}
) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>
        ))}
    </ul>
);


export default TodoList