import React from 'react';
import Carmel1 from './../../assets/carousal/carmel1.jpg';
import Carmel2 from './../../assets/carousal/carmel2.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Carmel2})`
          }}
        >
          <a href="https://carmeldrugstore-0.web.app/search/">
            Shop Now
          </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Carmel1})`
          }}
        >
          <a href="https://carmeldrugstore-0.web.app/search/">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
