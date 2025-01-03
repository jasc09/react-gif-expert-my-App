

import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';






export const useFhechGifs = ( category ) => {
        //UseState para el manejo del componente 
      const [images, setImages] = useState([]);
      const [isLoading, setIsLoading] = useState( true );
   
      getGifs

          //
    
      const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
      }
    
          //Use effect es un hooks que dispara el código que contiene cuando uno de sus componetes se actualiza.
      useEffect( ()=> {
    
        getImages();
    
      }, [])


  return {
    images,
    isLoading
  }
}
