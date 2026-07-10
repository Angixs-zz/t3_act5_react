import TodoApp from './components/TodoApp'
import SugerenciaRegalo from './components/SugerenciaRegalo/SugerenciaRegalo'
import TituloCumple from './components/TituloCumple/TituloCumple'
import ContadorPastel from './components/ContadorPastel/ContadorPastel'
import ListaInvitados from './components/ListaInvitados/ListaInvitados'
import { useState } from 'react'

function App() {
  /*const titulosApp = {
    tituloApp: "Soy Titulo App",
    subTituloApp: "Soy el subtitulo"
    {...titulosApp}
  }*/
  return (
    <section className="containerTodoApp">
      {/* <TodoApp /> */}

      {/* INCISO A: Componente Funcional Simple */}
      <TituloCumple />

      {/* INCISO B: Componente con props */}
      <h2 style={{ color: 'orange', textAlign: 'center', marginBottom: '20px' }}>Mesa de Regalos</h2>

      <SugerenciaRegalo
        regalo="PlayStation 5"
        precio="$10,000 MXN"
        tienda="Amazon"
      />

      <SugerenciaRegalo
        regalo="Teclado Mecánico"
        precio="$1,200 MXN"
        tienda="Mercado Libre"
      />
      {/* INCISO C: Componente con estado (useState) */}
      <ContadorPastel />

      {/* INCISO D: Lista dinámica con .map() */}
      <ListaInvitados />
    </section>
  );


}
export default App
