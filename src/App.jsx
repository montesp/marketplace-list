import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { List } from './components/common/List/List';
import { createPortal } from 'react-dom';
import { Modal} from './components/Modal/Modal';
import { useState } from 'react';

const ListTasks = [
  {
    id:1,
    title:"Lista del mandando",
    tasks: [
      "Sandia",
      "Manzanas",
      "Naranjas",
      "Galletas",
      "Cloralex",
      "Catsup",
    ]
  },
  {
    id:2,
    title:"Tareas Personales",
    tasks: [
      "Hacer la cama todas las mañanas",
      "Planificar y hacer la compra semanal de comida",
      "Limpiar la casa una vez por semana",
      "Lavar la ropa y plancharla",
      "Hacer ejercicio físico al menos tres veces por semana.",
      "Leer un libro nuevo cada mes",
      "Mantener una dieta saludable y balanceada",
      "Meditar 10 minutos al día",
      "Pasar tiempo con amigos y familiares al menos una vez por semana",
      "Ahorrar un porcentaje de los ingresos cada mes",
      "Organizar y archivar documentos importantes",
    ]
  },
  {
    id:3,
    title:"Proyecto programacion",
    tasks: [
      "Definir el objetivo y la temática del evento",
      "Planificar y diseñar la arquitectura del software",
      "Seleccionar el lenguaje de programación y las herramientas adecuadas",
      "Escribir, probar y depurar el código del software",
      "Mantener y actualizar el software existente",
      "Integrar diferentes sistemas y aplicaciones",
    ]
  },
]


function App() {
  const [showModal, setShowModal] = useState(false);
  const addList = () =>  setShowModal(!showModal);

  return (
    <div className="App">
      <Header/>
      <Home action={addList} >
        {ListTasks.map(list => (
          <List key={list.id} tasks={list.tasks} button={addList} />
        )
        )}
      </Home>
      <Footer/>

      {showModal &&
        createPortal(
          <Modal/>,
          document.getElementById('modal')
        )}
    </div>
  );
}

export default App;
