import { ButtonSocial } from '../common/ButtonSocial/ButtonSocial';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import GithubIcon from '../../assets/icons/github.svg';

import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <h4 className='footer__creator-title'>Created by Pavel </h4>
      <div className='footer__social-media-container'>
        <ButtonSocial
          img={LinkedinIcon}
          href='#'
          alt='Icono de la red social linkedin'
        />
        <ButtonSocial
          img={TwitterIcon}
          href='#'
          alt='Icono de la red social twitter'
        />
        <ButtonSocial
          img={GithubIcon}
          href='#'
          alt='Icono de la red social github'
        />
      </div>
    </footer>
  );
}

export { Footer };
