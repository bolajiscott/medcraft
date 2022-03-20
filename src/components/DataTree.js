import React, { useState } from "react";

export default function DataTree(props) {
  const [expand, setExpand] = useState(true);
  return (
    <>
      <div className="root-container">
        <div className="expand-container" onClick={() => setExpand(!expand)}>
          {expand ? (
            <span class="k-icon k-i-arrow-chevron-down"></span>
          ) : (
            <span class="k-icon k-i-arrow-chevron-right"></span>
          )}
          <div>{props.title}</div>
        </div>

        {expand && <div className="children-container">{props.children}</div>}
      </div>

      <style>{`
        .expand-container {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        .children-container {
            margin-top: 10px;
            margin-left: 10px;
        }
    `}</style>
    </>
  );
}
