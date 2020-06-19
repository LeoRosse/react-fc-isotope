import React from "react";
import PropTypes from "prop-types";

const Element = ({ element }) => (
  <div
    id={element.name}
    className={`element-item ${element.classes.join(" ")}`}
    data-category={element.category}
  >
    <h3 className="name">{element.name}</h3>
    <p className="symbol">{element.symbol}</p>
    <p className="number">{element.number}</p>
    <p className="weight">{element.weight}</p>
  </div>
);

Element.propTypes = {
  element: PropTypes.shape({
    classes: PropTypes.array,
    category: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    number: PropTypes.number,
    weight: PropTypes.number,
  }),
};

export default Element;
