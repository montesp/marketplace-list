import './_Home.scss';
import { Button } from '../common/Button/Button';
import addIcon from '../../assets/icons/plus.svg';

function Home({children}) {
  return (
    <main className='main'>
      <Button
        img={addIcon}
        alt='Icono de borrar una tarea'
        type='add'
      />
      <section className='task-container'>
        {children}
      </section>
    </main>
  );
}

export { Home };
