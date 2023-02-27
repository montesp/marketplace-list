import './_Header.scss';
import TaskIcon from '../../assets/icons/check-square.svg';

function Header() {
  return (
    <header className='header'>
      <img className='header__icon' src={TaskIcon} alt='Icono de tareas' />
      <h3 className='header__title'>Market List</h3>
    </header>
  );
}

export { Header };
