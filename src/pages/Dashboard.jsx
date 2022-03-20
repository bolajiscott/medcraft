import * as React from "react";
import { Route, Switch } from "react-router";
import DrawerRouterContainer from "../components/DrawerRouterContainer";
import Graphs from "../components/Graphs";
import Map from "../components/Map";

const Dashboard = () => {
  return (
    <div id="Dashboard" className="dashboard-page main-content">
      <DrawerRouterContainer>
        <Switch>
          <Route exact path="/covid" component={Map} />
          <Route exact path="/covid/graphs" component={Graphs} />
        </Switch>
      </DrawerRouterContainer>
    </div>
  );
};

export default Dashboard;
