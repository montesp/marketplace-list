import './_ListItem.scss';
import deleteIcon from '../../../assets/icons/trash.svg'

function ListItem({ text }) {
  return (
    <div className='list-item'>
      <input
        type="checkbox"
      />
      <label>
        {text}
      </label>
      <button>
        <img
          src={deleteIcon}
          alt='Icono de borrar una tarea'
          />
      </button>
    </div>
  );
}

export { ListItem };
