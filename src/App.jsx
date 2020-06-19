import React from "react";
import "./index.css";
import { elements as elementsProps, filterData, sortData } from "./utils/utils";
import Element from "./components/Element";
import { RenderIsotope } from "./components/RenderIsotope";
import { Button, ButtonGroup } from "reactstrap";

export default function App() {
  const [elements] = React.useState(elementsProps);
  const [filterValue, setFilterValue] = React.useState(undefined);
  const [sortValue, setSortValue] = React.useState(undefined);

  return (
    <div className="App">
      <ButtonGroup className="group-button">
        {filterData.map((b) => (
          <Button
            color="primary"
            key={b.name}
            active={filterData === b.value}
            onClick={() => setFilterValue(b.value)}
          >
            {b.name}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup className="group-button">
        {sortData.map((s) => (
          <Button
            color="primary"
            key={s.name}
            active={sortData === s.value}
            onClick={() => setSortValue(s.value)}
          >
            {s.name}
          </Button>
        ))}
      </ButtonGroup>
      <RenderIsotope filterValue={filterValue} sortValue={sortValue}>
        {elements.map((el) => (
          <Element key={el.name} element={el} />
        ))}
      </RenderIsotope>
    </div>
  );
}
