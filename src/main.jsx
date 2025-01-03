import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifexpertApp';
import './styles.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp/>
  </StrictMode>,
)

GifExpertApp



/* 
anotaciones 

la carpeta de estilos se importa en esta main o en su hijo para que sea global.






*/
