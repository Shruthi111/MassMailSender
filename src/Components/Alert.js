import React from "react";

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function Alert(props) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>
    )
  );
}
