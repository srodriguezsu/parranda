import React from 'react';
import './index.css';
import PrevIcon from '../../assets/path4.svg';
import PlayIcon from '../../assets/path2.svg';
import NextIcon from '../../assets/path3.svg';

const ReproductorVillancicos = () => {
  return (
      <div className="controles">
          <button className="control-btn">
              <img src={PrevIcon} alt="Previous"/>
          </button>
          <button className="control-btn play">
              <img src={PlayIcon} alt="Play"/>
          </button>
          <button className="control-btn">
              <img src={NextIcon} alt="Next"/>
          </button>
      </div>
  );
};

export default ReproductorVillancicos;
