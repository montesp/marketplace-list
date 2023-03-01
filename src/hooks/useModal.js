import { useState } from "react";

function useModal(){
  const [showModal, setShowModal] = useState(false);

  const addList = () =>  setShowModal(!showModal);


  return {
    showModal,
    addList,
  }
}

export {useModal}