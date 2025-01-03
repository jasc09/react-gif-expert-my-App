// on es un evento 

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
    const [categories, setCategories] = useState( ['']);

    const onAddCategory = ( newCategory ) =>{
                //evita duplicados en las categorias
        if( categories.includes(newCategory))return;
        setCategories( [ newCategory, ...categories ] ); 

     
    }
    
    return (
        <>
            <h3>GifExpertApp</h3>

            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory = { (event) => onAddCategory (event) }
            />
           
           
            {
                categories.map ( ( category ) => (
                    <GifGrid
                        key = { category }
                        category = {category}
                    />
                ))

            }    
        </>
  )
}
