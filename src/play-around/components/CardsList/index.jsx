import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ROBOTS from "../../../state/robots";

import Card from "../Card";

const propTypes = {
  id: PropTypes.string,
  className: PropTypes.string
};

function CardsList(props) {
  const { id, className } = props;

  return (
    <div {...id && { id }} class={classNames("container-fluid", className)}>
      <div class="row">
        {ROBOTS.map(robot => (
          <div key={robot.id} class="col-md-3 col-sm-6">
            <Card {...robot} />
          </div>
        ))}
      </div>
    </div>
  );
}

CardsList.propTypes = propTypes;

export default CardsList;
