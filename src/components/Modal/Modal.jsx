import './_Modal.scss';

function Modal({children}) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <label>
          Titulo
          <input type='text'/>
        </label>
        <div>
          <button>Create</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export { Modal };
