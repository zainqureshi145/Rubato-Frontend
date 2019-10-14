import React from "react";
import classNames from "classnames";

export const SubmitButton = ({ name }) => (
  <button
    style={{ marginTop: "20px" }}
    className="btn waves-effect waves-light"
    type="submit"
  >
    {name}
    <i className="material-icons right">send</i>
  </button>
);

export const IconButton = ({ icon, classname, onClick, text }) => (
  <button
    onClick={onClick}
    className={classNames("btn waves-effect waves-light hoverable", classname, {
      "halfway-fab btn-floating": !text
    })}
  >
    {text}
    <i className="material-icons right">{icon}</i>
  </button>
);

export const PopperButton = ({ onClick, icon, classname }) => (
  <button
    className={classNames("right red btn-floating hoverable", classname)}
    onClick={onClick}
  >
    <i className="material-icons right">{icon}</i>
  </button>
);
