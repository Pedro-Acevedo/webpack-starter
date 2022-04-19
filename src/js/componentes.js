
import '../css/componentes.css';
// Forma de importar imagenes 1
// import webpacklogo from '../assets/imgs/webpack-logo.png';


export const saludar = ( nombre ) => {

    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre} :P`;
    
    document.body.append( h1 );
}

// Forma 1
// const img = document.createElement('img');
// img.src = webpacklogo;
// document.body.append( img );