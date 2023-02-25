import './_ListItem.scss';
import deleteIcon from '../../../assets/icons/trash.svg';
import { useState } from 'react';

function ListItem({ text }) {
  const [isSelected, setIsSelected] = useState(false);

  const selectBox = (event) => {
    setIsSelected(event.target.checked);
  }

  const deleteItem = (e) => {
    // console.log("borrado");
    console.log(e);

  }

  return (
    <div className='list-item'>
      <input
        type="checkbox"
        onChange={selectBox}
      />
      <label
        className={`${isSelected && "list-item--selected"}`}
      >
        {text}
      </label>
      <button
        onClick={deleteItem}
        className='list-item__button list-item__button--delete'
        >
        <img
          src={deleteIcon}
          alt='Icono de borrar una tarea'
          />
      </button>
    </div>
  );
}

export { ListItem };
