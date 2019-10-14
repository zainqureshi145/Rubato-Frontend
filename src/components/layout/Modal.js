import React from "react";
import ReactModal from "react-modal";

import classNames from "classnames";
import css from "./styles/Modal.module.scss";

const Modal = ({
  children,
  className,
  isOpen,
  overlayClassName,
  title,
  onClose
}) => {
  return (
    <ReactModal
      ariaHideApp={false}
      className={classNames(css.modal, className)}
      overlayClassName={classNames(css.overlay, overlayClassName)}
      onRequestClose={onClose}
      closeTimeoutMS={350}
      isOpen={isOpen}
    >
      <div>
        <i className="material-icons right hoverable" onClick={onClose}>
          close
        </i>
        {title && (
          <div className="center-align" style={{ fontWeight: "bold" }}>
            {title}
          </div>
        )}
        <div className="center-align">{children}</div>
      </div>
    </ReactModal>
  );
};

export default Modal;
