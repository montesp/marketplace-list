import { useState } from "react";

function useLocalStorage(){
  const [lists, setLists] = useState([]);


  function addList(newValue){
    localStorage.setItem('list', )
  }


  return {lists}
}

export {useLocalStorage};
