import React, { useState } from 'react';
import {
  coracaoActive, coracaoActiveHover, coracaoDefault, coracaoHover
} from '../../assets/index';

export default function Favorite() {
  const [favoriteClick, setFavoriteClick] = useState(false);
  const [favoriteHover, setFavoriteHover] = useState(false);

  function selectFavoriteIcon() {
    if (favoriteClick && favoriteHover) return coracaoActiveHover;
    if (favoriteClick) return coracaoActive;
    if (favoriteHover) return coracaoHover;
    return coracaoDefault;
  }
  return (
    <img
      src={ selectFavoriteIcon() }
      alt="Selecionar como Favorito"
      onClick={ () => setFavoriteClick(!favoriteClick) }
      onMouseOver={ () => setFavoriteHover(true) }
      onMouseOut={ () => setFavoriteHover(false) }
      className="iconCore"
      style={{ width: '30px' }}
    />
  )
}
