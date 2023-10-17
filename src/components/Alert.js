import React from "react";
import PropTypes from "prop-types";

function Alert(props) {

  return (
    props.alert &&
      <div className="alert alert-success" role="alert">
        <h4 className="text-center">{props.alert.message}</h4>
      </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.object
};

export default Alert;
