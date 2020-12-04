import React from 'react';
import './styles.scss';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="wrap">
        &copy;{new Date().getFullYear()} Copyright Carmel Drug Store. 
      </div>
    </footer>
  );
}

export default Footer;