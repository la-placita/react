import { useState } from 'react';
export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
        <h2>Add Category</h2>
        <input type="text" placeholder="Enter category" value={inputValue} onChange={onInputChange}/>
        <button>Add</button>
        </form>
    );
}