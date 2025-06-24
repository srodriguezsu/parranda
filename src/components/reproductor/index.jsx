import React from 'react';
import './index.css';
import { ReactComponent as PrevIcon } from '../assets/icons/path4.svg';
import { ReactComponent as PlayIcon } from '../assets/icons/path2.svg';
import { ReactComponent as NextIcon } from '../assets/icons/path3.svg';

const ReproductorVillancicos = () => {
  return (
    <div className="controles">
      <button className="control-btn">
        <PrevIcon />
      </button>
      <button className="control-btn play">
        <PlayIcon />
      </button>
      <button className="control-btn">
        <NextIcon />
      </button>
    </div>
  );
};

export default ReproductorVillancicos;
