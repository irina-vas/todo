import React, {useContext, useState} from 'react';
import Button from './Button';
import AddTodo from './AddTodo';
import Context from './Context/Context';


function FormTodo() {
    const {addTodo} = useContext(Context);
    const {todo} = useContext(Context);
    const {setTodo} = useContext(Context);
    const [selected, setSelected] = useState('added');

    const deleteTodo = (id) => {
      let newTodo = [...todo].filter(item => item.id != id);
      setTodo(newTodo)
    }
    console.log(todo)
    const handleSelectChange = (e,id) => {
      console.log(id)
        // setSelected()
        //let newTodo = [ ...[...todo].filter(item => item.id !== id), { ...todo[id-1], completed: e.target.value}];
        let newTodo = todo.map((item) => {
          if (item.id === id){
            return {id: item.id, title: item.title, completed: e.target.value}
          }
            return item
        })
        // let newTodo = [...todo].filter(item => item.id === id ? item.completed = selected : [...todo]);
        setTodo(newTodo)


    }
    console.log(selected)

    return (
        <div className="wrapper">
            <div className="todos_nonSelected">
                <h2>Added tasks</h2>
                {todo.map(item => {
                    return (
                        <div className="todo_item_wrapper" key={item.id}>
                            <div className="todo_item">{item.title}</div>
                            <div>
                                <select className="select_todo"
                                    value={selected}
                                    onChange={(e)=>handleSelectChange(e, item.id)}
                                >
                                    <option>select</option>
                                    <option>in progress</option>
                                    <option>done</option>
                                </select>
                                <button
                                    className="todo_delete"
                                    onClick={() => deleteTodo(item.id)}>
                                    <span>DELETE</span>
                                </button>
                            </div>

                        </div>
                    )
                })}
                {addTodo ? <AddTodo /> : <Button />}
            </div>
            <div className="todos_inProgress">
                <h2>Tasks in progress</h2>
            </div>
            <div className="todos_done">
                <h2>Tasks done</h2>
            </div>

        </div>
    );
}

export default FormTodo;