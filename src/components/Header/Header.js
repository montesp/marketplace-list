import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <h3 className='header__title'>Market List</h3>
      <ul className='header__list'>
        <li className='header__list-item'>My List</li>
        <li className='header__list-item'>Home</li>
      </ul>
    </header>
  );
}

export { Header };
