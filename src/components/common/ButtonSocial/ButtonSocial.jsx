import './ButtonSocial.scss';

function ButtonSocial({
  href,
  img,
  alt,
}) {
  return (
    <a className='button__social-media' href={href}>
      <img src={img} alt={alt}/>
    </a>
  );
}

export { ButtonSocial };
