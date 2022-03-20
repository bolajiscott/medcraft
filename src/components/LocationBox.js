import React from "react";
import * as PropTypes from "prop-types";

import { Card, CardSubtitle, CardTitle } from "@progress/kendo-react-layout";

export default function LocationBox(props) {
  return (
    <Card
      style={{
        minWidth: 260,
        boxShadow: "0 0 4px 0 rgba(0, 0, 0, .1)",
        marginTop: "15px",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardTitle style={{ textTransform: "capitalize", margin: 0 }}>
          {props.location.country}
        </CardTitle>
        <CardSubtitle style={{ margin: 0 }}>
          {props.location.totalCases}
        </CardSubtitle>
      </div>
    </Card>
  );
}

LocationBox.propTypes = {
  location: PropTypes.object,
};
