import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories}) => {

    const [inputValue, setInputValue] = useState('');    
    const handleInputChange = ( e ) => {
        //console.log(e.target.value)
        setInputValue(e.target.value)
    }


    const handledSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 1) {

            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handledSubmit}>
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
