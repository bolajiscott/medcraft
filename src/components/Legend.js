import { Card } from "@progress/kendo-react-layout";
import React from "react";

const Legend = (props) => {
  const renderLegendKeys = (stop, i) => {
    return (
      <div key={i} className="txt-s">
        <span
          style={{ color: stop[1], paddingRight: "5px" }}
          class="k-icon k-i-circle"
        ></span>
        <span>{`${stop[0].toLocaleString()}`}</span>
      </div>
    );
  };

  return (
    <>
      <Card
        style={{ padding: "15px", boxShadow: "0 0 4px 0 rgba(0, 0, 0, .1)" }}
        className="bg-white absolute bottom right mr12 mb24 py12 px12 shadow-darken10 round z1 wmax180"
      >
        <div className="mb6">
          <p className="txt-bold txt-s block">{props.data.name}</p>
          <p className="txt-s color-gray">{props.data.description}</p>
        </div>
        {props.data.stops.map(renderLegendKeys)}
      </Card>
    </>
  );
};

export default Legend;
