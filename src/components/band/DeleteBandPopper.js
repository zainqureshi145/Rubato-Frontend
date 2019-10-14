import React, { useState } from "react";
import ReactPopper from "../layout/PopperComponent";
import { IconButton, PopperButton } from "../layout/Buttons";

const DeleteBandPopper = ({ onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ReactPopper
      isOpen={isOpen}
      referenceButton={
        <PopperButton onClick={() => setIsOpen(!isOpen)} icon={"delete"} />
      }
    >
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="center-align"
      >
        Are you sure?
        <div style={{ margin: "8px 0 8px 0" }}>
          <IconButton
            text={"Yes, Delete it"}
            classname="red"
            onClick={onDelete}
          />
        </div>
        <IconButton text={"Cancel"} onClick={() => setIsOpen(false)} />
      </div>
    </ReactPopper>
  );
};

export default DeleteBandPopper;
