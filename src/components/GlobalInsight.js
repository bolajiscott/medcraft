import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@progress/kendo-react-layout";
import React from "react";

export default function GlobalInsight() {
  return (
    <>
      <Card
        style={{
          minWidth: 260,
          boxShadow: "0 0 4px 0 rgba(0, 0, 0, .1)",
          marginTop: "15px",
        }}
      >
        <CardHeader
          className="k-hbox"
          style={{
            background: "inherit",
          }}
        >
          <div>
            <CardSubtitle>Confirmed Cases Worldwide</CardSubtitle>
            <CardTitle
              style={{
                marginBottom: "4px",
              }}
            >
              111,112,221
            </CardTitle>

            <CardBody style={{ width: "100%" }}>
              {/* active cases */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <span
                    style={{ color: "green" }}
                    class="k-icon k-i-circle"
                  ></span>
                  <span>Active Cases</span>
                </div>
                <span>112,320</span>
              </div>

              {/* fatal cases */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{ color: "red" }}
                    class="k-icon k-i-circle"
                  ></span>
                  <span>Fatal Cases</span>
                </div>
                <span>112,320</span>
              </div>
            </CardBody>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
