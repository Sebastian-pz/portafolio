import { useState, useEffect } from 'react';
import DuckerIcon from '../../assets/Ducker-icon.webp';
import DuckerBackground from '../../assets/Ducker-background.webp';
import RockStarPlaceIcon from '../../assets/Rockstar-place-icon.webp';
import RockStarPlaceBackground from '../../assets/Rockstar-place-background.webp';
import Pokemon from '../../assets/Pokemon-icon.webp';
import PokemonBackground from '../../assets/Pokemon-background.webp';

const Carrousel = () => {
  const [selected, setSelected] = useState(0);
  const [background, setBackground] = useState('');

  const getBackground = (numSelected) => {
    switch (numSelected) {
      case 0:
        setBackground(DuckerBackground);
        break;
      case 1:
        setBackground(RockStarPlaceBackground);
        break;
      case 2:
        setBackground(PokemonBackground);
        break;
      default:
        setBackground('');
        break;
    }
  };

  function handleMove(e) {
    e.preventDefault();
    if (e.target.id === 'next') {
      if (selected < 4) {
        console.log(selected + 1);
        return setSelected(selected + 1);
      } else {
        return setSelected(0);
      }
    }
    if (e.target.id === 'previous') {
      if (selected > 0) {
        return setSelected(selected - 1);
      } else {
        return setSelected(4);
      }
    }
    console.log(selected, background);
  }

  useEffect(() => {
    getBackground(selected);
    console.log(selected, background);
  }, [selected]);

  const styles = {
    backgroundSize: '100%',
    background: `url(${background})`,
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="carrousel" style={styles}>
      <button id="previous" onClick={(e) => handleMove(e)}>
        Anterior
      </button>
      <img src={DuckerIcon} alt="Imagen proyecto 1" height={'200px'} />
      <img src={RockStarPlaceIcon} alt="Imagen proyecto 2" height={'200px'} />
      <img src={Pokemon} alt="Imagen proyecto 3" height={'200px'} />
      <button id="next" onClick={(e) => handleMove(e)}>
        Siguiente
      </button>
    </div>
  );
};

export default Carrousel;
