import React, { useState } from 'react';
import { check } from '../../assets/index';

export default function Button() {
  const [isChecked, setIsChecked] = useState(false);

  function handleClickButton({ target }) {
    if (isChecked){
      setIsChecked(false);
      return target.classList.remove('click');
    }
    setIsChecked(true);
    return target.classList.add('click');
  }

  return (
    <button onClick={ handleClickButton } >
      { isChecked ? 
      (
        <> 
          <img src={ check } alt='clicado' /> 
          Adicionado
        </>
      ) 
      : 'Adicionar' }
    </button>
  )
}
