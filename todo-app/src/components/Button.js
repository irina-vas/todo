import React, {useContext} from 'react';
import Context from './Context/Context';
import './Button.css';

const Button = () => {
    const {handleAddTodo} = useContext(Context)


    return (
        <div className="button_add">
            <button onClick={handleAddTodo}>ADD TODO</button>
        </div>
    );
};

export default Button;