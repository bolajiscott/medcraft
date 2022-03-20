import React from "react";

import { withRouter } from "react-router-dom";
import {
  registerForLocalization,
  provideLocalizationService,
} from "@progress/kendo-react-intl";

import { Header } from "./Header.jsx";
import GlobalInsight from "./GlobalInsight.js";
import LocationBox from "./LocationBox.js";
import { Card, CardSubtitle } from "@progress/kendo-react-layout";

const items = [
  { name: "dashboard", icon: "k-i-grid", selected: true, route: "/" },
  { name: "planning", icon: "k-i-calendar", route: "/planning" },
  { name: "profile", icon: "k-i-user", route: "/profile" },
  { separator: true },
  { name: "info", icon: "k-i-information", route: "/info" },
];

class DrawerRouterContainer extends React.Component {
  state = {
    expanded: true,
    selectedId: items.findIndex((x) => x.selected === true),
    isSmallerScreen: window.innerWidth < 768,
  };

  componentDidMount() {
    window.addEventListener("resize", this.resizeWindow);
    this.resizeWindow();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeWindow);
  }

  resizeWindow = () => {
    this.setState({ isSmallerScreen: window.innerWidth < 768 });
  };

  handleClick = () => {
    this.setState((e) => ({ expanded: !e.expanded }));
  };

  handleSelect = (e) => {
    this.setState({ selectedId: e.itemIndex, expanded: false });
    this.props.history.push(e.itemTarget.props.route);
  };

  // getSelectedItem = (pathName) => {
  //   let currentPath = items.find((item) => item.route === pathName);
  //   if (currentPath.name) {
  //     return currentPath.name;
  //   }
  // };
  render() {
    // let selected = this.getSelectedItem(this.props.location.pathname);
    // const localizationService = provideLocalizationService(this);

    let locations = [
      {
        country: "Nigeria",
        totalCases: "123,000",
      },
      {
        country: "America",
        totalCases: "123,000",
      },
      {
        country: "Algeria",
        totalCases: "123,000",
      },
    ];

    return (
      <React.Fragment>
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr" }}>
          <div
            style={{
              position: "sticky",
              minHeight: "100vh",
              background: "#FFFFFF",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div
              style={{
                display: "flex",
                background: "red",
                alignItems: "center",
                paddingLeft: "15px",
                height: "42px",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              <span>Track Covid 19</span>
              <span class="k-icon k-i-arrow-chevron-down"></span>
            </div>

            <div style={{ padding: "15px" }}>
              <div style={{ marginBottom: "10px" }}>
                <p>Global Insights</p>
                <GlobalInsight />
              </div>

              <div style={{ marginBottom: "10px" }}>
                <p>Locations</p>
                <Card
                  style={{
                    minWidth: 260,
                    boxShadow: "0 0 4px 0 rgba(0, 0, 0, .1)",
                    marginTop: "15px",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="search"
                      name="searchLocation"
                      id="searchLocation"
                      placeholder="search locations"
                      style={{
                        border: 0,
                        width: "100%",
                        height: "100%",
                        outline: 0,
                      }}
                    />
                    <span class="k-icon k-i-search"></span>
                  </div>
                </Card>
                {locations.map((location) => (
                  <LocationBox location={location} />
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateRows: "auto 1fr" }}>
            <Header
              onButtonClick={this.handleClick}
              // page={localizationService.toLanguageString(`custom.${selected}`)}
            />
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// registerForLocalization(DrawerRouterContainer);

// export default withRouter(DrawerRouterContainer);

export default DrawerRouterContainer;
