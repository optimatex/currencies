import React from "react";
import PropTypes from "prop-types";

const CurrenciesList = props => {
  return (
    <div className="currencies__list">
      {Object.keys(props.items).map(key => (
        <div className="currencies__item" key={key}>
          <span className="currencies__key">{key}</span>

          <span className="currencies__value">
            {props.items[key]} <span className="currencies__sub">RUB</span>
          </span>
        </div>
      ))}
    </div>
  );
};

CurrenciesList.propTypes = {
  items: PropTypes.shape({})
};
export default CurrenciesList;
