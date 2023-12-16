import React from 'react';
import PropTypes from 'prop-types';
import './CustomCard.css'; // You can create a CSS file for styling

function CustomCard({ Url,imageUrl }) {
  return (
    <div className="custom-card">
      <a href={Url}>
      <img className="Bongo" src={imageUrl} alt="Projects" />
      </a>
    </div>
  );
}

CustomCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  Url: PropTypes.string.isRequired
};

export default CustomCard;
