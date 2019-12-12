import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),

  avatar: PropTypes.string,
  email: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string
};

const defaultProps = {
  avatar: "",
  email: "",
  first_name: "",
  last_name: ""
};

function Card(props) {
  const { id, className } = props;
  const { avatar, email, first_name, last_name } = props;
  const fullName = `${first_name} ${last_name}`;

  function onClickHandler() {
    alert(`My name is "${fullName}"`);
  }

  return (
    <figure {...id && { id }} className={classNames("card", className)}>
      <img src={avatar} class="card-img-top" alt={fullName} />

      <div class="card-body">
        <h2 class="card-title">{fullName}</h2>
        <address class="card-text">{email}</address>
      </div>
      <button class="btn btn-primary" onClick={onClickHandler}>
        Greeting
        <span aria-label="greeting" role="img">
          ✋
        </span>
      </button>
    </figure>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
