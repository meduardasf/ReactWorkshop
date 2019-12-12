import React from "react";
import Card from "./Card";
import ROBOTS from "./state/robots";

function RobotsList() {
  return (
    <div class="container-fluid">
      <div class="row">
        {ROBOTS.map(robot => (
          <div class="col-md-3 col-sm-6">
            <Card key={robot.id} {...robot} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RobotsList;
