import React, {useContext, useState} from 'react';
import Context from './Context/Context';
import './AddTodo.css';
import * as uuid from 'uuid';


const AddTodo = () => {
    const [value, setValue] = useState('');
    const {setTodo} = useContext(Context);
    const {todo} = useContext(Context);


    const saveTodo = () => {
        setTodo(
            [...todo, {
                id: Math.floor((Math.random() * 100)+1),
                title: value,
                completed: 'added'
                }
            ]
        )
        setValue('')
    }

    return (
        <div>
            <div className="todo_new"></div>
            <div className="input_wrapper">
                <input
                    className="input_todo"
                    type = "text"
                    placeholder="add a task..."
                    value={value}
                    onChange={(e) => setValue((e.target.value))}
                />
                <button className="button_todo" onClick={saveTodo}>save</button>
            </div>


        </div>
    );
};

export default AddTodo;