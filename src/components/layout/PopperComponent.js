import React from "react";
import { Popper, Manager, Reference } from "react-popper";
import css from "./styles/Popper.module.scss";

const ReactPopper = ({ referenceButton, children, isOpen }) => (
  <Manager>
    <Reference>{({ ref }) => <div ref={ref}>{referenceButton}</div>}</Reference>
    {isOpen ? (
      <Popper placement="bottom">
        {({ ref, style, placement, arrowProps }) => (
          <div
            ref={ref}
            className={css.popper}
            style={style}
            data-placement={placement}
          >
            {children}
            <div
              ref={arrowProps.ref}
              style={arrowProps.style}
              className={css.arrow}
              data-placement={placement}
            />
          </div>
        )}
      </Popper>
    ) : null}
  </Manager>
);

export default ReactPopper;
