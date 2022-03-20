import { Card, CardSubtitle, CardTitle } from "@progress/kendo-react-layout";
import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: "Track Covid19",
    body: "Realtime updates, map distribution and graphical visualizations",
    color: "#AB60BB",
    route: "/covid",
  },
  {
    id: 2,
    title: "Medical Services",
    body: "Realtime updates, map distribution and  graphical visualizations",
    color: "#244850",
    route: "/medical-services",
  },
  {
    id: 3,
    title: "News and videos",
    body: "Realtime updates, map distribution and  graphical visualizations",
    color: "#EF6C00",
    route: "/news-videos",
  },
];

const Home = () => {
  return (
    <div>
      {/* header */}
      <div
        style={{
          height: "50vh",
          backgroundColor: "#0B1134",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          color: "white",
          paddingTop: "40px",
        }}
      >
        <div>
          <p style={{ fontSize: "34px" }}>Covid 19 Tracker</p>
          <p style={{ fontSize: "20px" }}>
            Realtime data and news on covid 19 at your fingertips
          </p>
        </div>
      </div>

      <div style={{ margin: "-120px 10% 50px" }}>
        {/* services */}
        <div>
          <p style={{ color: "#ffffff", fontSize: "20px" }}>Services</p>
          <div
            style={{
              p: { margin: 0 },
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {cardData.map((data) => (
              <Link to={data.route}>
                <Card
                  style={{
                    backgroundColor: `${data.color}`,
                    padding: "20px",
                    color: "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ height: "150px" }}></div>
                  <hr />
                  <div>
                    <CardTitle>{data.title}</CardTitle>
                    <CardSubtitle style={{ color: "white", fontSize: "14px" }}>
                      {data.body}
                    </CardSubtitle>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          {/* attribution */}
          <span>
            Powered by
            <a href="https://www.telerik.com/kendo-react-ui">KendoUI</a>
          </span>

          {/* links */}
          <div>
            <Link to="#">
              <span style={{ marginRight: "10px" }}>Privacy Policy</span>
            </Link>
            <Link to="#">
              <span style={{ marginRight: "10px" }}>Support</span>
            </Link>
            <Link to="#">
              <span style={{ marginRight: "10px" }}>Terms</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
