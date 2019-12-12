import React from "react";
import PropTypes from "prop-types";

import { logo, logoAlt } from "./state/company";

const propTypes = {
  paragprah: PropTypes.string
};

const defaultProps = {
  paragprah: "Why didn't you?"
};

function Header(props) {
  // console.log({ props });

  return (
    <h1>
      <img src={logo} alt={logoAlt} />
      Robots/Users list
      {/* {props.paragprah} */}
    </h1>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
