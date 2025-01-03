

import { useFhechGifs } from "../hooks/useFhechGifs";
import { GifItem } from "./GifItem";





export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFhechGifs ( category );


useFhechGifs
  return (
    <>
      <h3>{ category }</h3>

      {
          // creamos un if logico para mostrar un componente
          isLoading && ( <h2> Cargando... .</h2> )

      }
      
      <div className="card-grid">
        { 
          images.map ( ( image ) => (
            <GifItem
              key={ image.id }
                //dos formas de la primesa se envian los datos como creamos la imagen 
              //image={ image }
                //se envia la imagen pero con todas sus propiedades espacidas, se reciben como propiedades en el hijo
              {...image}
            
            
            />
          )) 
        
        }
      </div>

    </>
  )
}
