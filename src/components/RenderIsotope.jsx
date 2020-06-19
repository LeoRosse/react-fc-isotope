import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Isotope from "isotope-layout";
import { filterFns } from "../utils/utils";

export const RenderIsotope = ({ children, filterValue, sortValue }) => {
  const isotopeContainer = React.useRef();
  const [iso, setIso] = React.useState(null);
  const isoOptions = {
    itemSelector: ".element-item",
    layoutMode: "fitRows",
    getSortData: {
      name: ".name",
      symbol: ".symbol",
      number: ".number parseInt",
      category: "[data-category]",
      weight: function (itemElem) {
        var weight = itemElem.querySelector(".weight").textContent;
        return parseFloat(weight.replace(/[()]/g, ""));
      },
    },
  };
  React.useEffect(() => {
    const createIsotopeContainer = () => {
      if (iso == null) {
        setIso(
          new Isotope(
            ReactDOM.findDOMNode(isotopeContainer.current),
            isoOptions
          )
        );
      }
    };
    createIsotopeContainer();
    if (iso)
      iso.arrange({
        filter: filterFns[filterValue] || filterValue,
        sortBy: sortValue,
      });
  }, [filterValue, iso, isoOptions, sortValue]);

  return (
    <div className="isotope" ref={isotopeContainer}>
      <div className="element-item-sizer" />
      {children}
    </div>
  );
};
