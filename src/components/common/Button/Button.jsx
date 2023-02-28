import './_Button.scss';

function Button({
  img,
  alt,
  type,
  action,
}) {
  return (
    <button
      className={`button button--${type}`}
      onClick={action}
    >
      <img src={img} alt={alt} />
    </button>
  );
}

export { Button };
