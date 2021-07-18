import React from 'react';
import {Item} from "../MyComponents/Item";

export const Todo = (props) => {
    return (
        <div className="container">
            <h3 className="text-center">To Do List</h3>
            {props.todo.map((todo) => {
                return <Item todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })}
        </div>
    )
}