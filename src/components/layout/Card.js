import React from "react";
import { IconButton } from "./Buttons";

export const CardHeader = ({ title, icon, onClick, classname }) => (
  <div className="card">
    <div className="card-image">
      <span
        className="card-title blue-grey"
        style={{ width: "100%", fontWeight: "bold" }}
      >
        {title}
      </span>
      <IconButton onClick={onClick} icon={icon} classname={classname} />
    </div>
  </div>
);

export const CardContent = ({ children }) => (
  <div className="card">
    <div className="card-content">{children}</div>
  </div>
);

export const Card = ({ children, imageContent }) => (
  <div className="card">
    <div className="card-image">{imageContent}</div>
    <div className="card-content">{children}</div>
  </div>
);
