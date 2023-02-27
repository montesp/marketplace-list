import './_ListItem.scss';
import deleteIcon from '../../../assets/icons/trash.svg';
import { useState } from 'react';
import { Button } from '../Button/Button';

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
      <Button
        img={deleteIcon}
        alt='Icono de borrar una tarea'
        type='delete'
      />
    </div>
  );
}

export { ListItem };
