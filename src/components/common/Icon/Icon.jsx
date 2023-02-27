import './_Icon.scss';

function Icon({
  href,
  img,
  alt,
}) {
  return (
    <a
      className='button__social-media'
      href={href}
      target='_blank'
      rel="noreferrer">
      <img src={img} alt={alt}/>
    </a>
  );
}

export { Icon };
