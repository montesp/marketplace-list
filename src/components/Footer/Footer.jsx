import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <h4 className='footer__creator-title'>Created by Pavel </h4>
      <ul className='footer__social-media-container'>
        <li><a href='#'>Github</a></li>
        <li><a href='#'>Linkedin</a></li>
        <li><a href='#'>Twitter</a></li>
      </ul>
    </footer>
  );
}

export { Footer };
