//manaja todo lo que tiene el input
// la property del evento input onChange evia el evento del cambio a la funcion creada para manejar el evento
//onSumid se usa para detectar una entrada en un formulario

import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
                // Forma de de agregar desde el compente padre con use state en GifExpertApp
                //setCategories( categories => [ inputValue, ...categories ]);
                //se envia el state para ser manejado en GifExpertApp
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    // const onInputChange = ( event ) => {
    //     setInputValue(event.target.value);

    // }


 
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
  








