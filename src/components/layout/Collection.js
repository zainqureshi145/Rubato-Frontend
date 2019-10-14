import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "./Buttons";

export const CollectionItem = ({
  mainIcon,
  title,
  firstLine,
  secondLine,
  secondaryIcon,
  link,
  isAdmin,
  onDeleteClick
}) => {
  return (
    <li className="collection-item avatar">
      <i className="material-icons circle">{mainIcon}</i>
      <span className="title">{title}</span>
      <p>
        {firstLine} <br /> {secondLine}
      </p>
      {isAdmin && (
        <div style={itemStyle} className="secondary-content">
          <IconButton
            icon="delete"
            classname="red btn-small"
            onClick={onDeleteClick}
          />
        </div>
      )}
      <Link to={link} className="secondary-content">
        <i className="material-icons">{secondaryIcon}</i>
      </Link>
    </li>
  );
};

CollectionItem.defaultProps = {
  mainIcon: "account_circle",
  secondaryIcon: "send",
  link: "/",
  isAdmin: false
};

export const Collection = ({ children }) => (
  <ul className="collection">{children}</ul>
);

const itemStyle = { marginRight: "30px", marginTop: "15px" };

export const List = ({ children }) => {
  return <li className="collection-item">{children}</li>;
};
