import React from 'react';
import moleImg from '../CuteMole.png' ;
const Mole = ({ visible, onWhack }) => {
  return (
    <div className="hole" onClick={visible ? onWhack : null}>
      {visible && <img src={moleImg} alt="Mole" className="mole" />}
    </div>
  );
};

export default Mole;