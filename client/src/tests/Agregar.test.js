import { prettyDOM, render } from "@testing-library/react";
import Agregar from "../Pages/Agregar";
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from '../store/index'



describe('Formulario Agregar Juego', () => {

    const component = render(
      <Provider store={store}>
      <BrowserRouter>
        <Agregar />
      </BrowserRouter>
    </Provider>
   )
   //component.debug()

    const labelNombre = component.getByLabelText(/Nombre:/i)
    const labelRating = component.getByLabelText(/Rating:/i)
    const labelFechaLanzamiento = component.getByLabelText(/Fecha de lanzamiento:/i)
    const labelImagen = component.getByLabelText(/Imagen:/i)
    const labelDescripcion = component.getByLabelText(/Descripcion:/i)
    const labelGenero = component.getByLabelText(/Generos:/i)
    const labelPlataforma = component.getByLabelText(/Plataformas:/i)
    const boton = component.getByRole('button')
       
    
   
    it('Debe rendizar un formulario', ()=>{
      expect(component.container.querySelector('form')).toBeInTheDocument()      
    })
    it('Debe rendizar un label para el nombre con el texto "Nombre:"', ()=>{
     expect(labelNombre).toBeTruthy()      
    })
    it('Debe rendizar un label para el rating con el texto "Rating:"', ()=>{
      expect(labelRating).toBeTruthy()       
     })
     it('Rating debe tener un input de tipo number', ()=>{
      expect(labelRating).toHaveAttribute('type', 'number')       
     })
     it('Debe rendizar un label para la fecha con el texto "Fecha de lanzamiento:"', ()=>{
      expect(labelFechaLanzamiento).toBeTruthy()       
     })
     it('Fecha de lanzamiento debe ser un input de tipo date', ()=>{
      expect(labelFechaLanzamiento).toHaveAttribute('type', 'date')       
     })
     it('Debe rendizar un label para la imagen con el texto "Imagen:"', ()=>{
      expect(labelImagen).toBeTruthy()       
     })
     it('Debe rendizar un label para la descripcion con el texto "Descripcion:"', ()=>{
      expect(labelDescripcion).toBeTruthy()    
     })
     it('Debe rendizar un label para los generos con el texto "Generos:"', ()=>{
      expect(labelGenero).toBeTruthy()      
     })
     it('Debe rendizar un label para las plataformas con el texto "Plataformas:"', ()=>{
      expect(labelPlataforma).toBeTruthy()      
     })
     it('Debe rendizar un boton', ()=>{
      expect(boton).toBeDefined()       
     })       
});