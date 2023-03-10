import { Icon } from '../common/Icon/Icon';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import GithubIcon from '../../assets/icons/github.svg';

import './_Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <h4 className='footer__creator-title'>Created by Pavel </h4>
      <div className='footer__social-media-container'>
        <Icon
          img={LinkedinIcon}
          href='https://www.linkedin.com/in/montesp/'
          alt='Icono de la red social linkedin'
        />
        <Icon
          img={GithubIcon}
          href='https://github.com/montesp'
          alt='Icono de la red social github'
        />
      </div>
    </footer>
  );
}

export { Footer };
