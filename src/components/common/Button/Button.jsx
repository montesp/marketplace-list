import './_Button.scss';

function Button({
  img,
  alt,
  type,
}) {
  return (
    <button
      className={`button button--${type}`}
    >
      <img src={img} alt={alt} />
    </button>
  );
}

export { Button };
