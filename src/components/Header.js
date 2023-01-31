import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <h3 className='header__title'>Market List</h3>
      <ul className='header__list'>
        <li className='header__list-item'>Mi Lista</li>
        <li className='header__list-item'>Inicio</li>
      </ul>
    </header>
  );
}

export { Header };
