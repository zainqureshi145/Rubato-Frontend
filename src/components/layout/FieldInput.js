import React from "react";

export const TextInput = ({ value, onChange, name, label, required, icon }) => (
  <div className="input-field col s6">
    {icon && <i className="material-icons prefix">{icon}</i>}
    <input
      type="text"
      id={`${name}-input`}
      value={value}
      onChange={onChange}
      required={required}
    />
    <label htmlFor={`${name}-input`}>{label}</label>
  </div>
);

TextInput.defaultProps = {
  required: true
};

export const SuggestSelect = ({ value, onChange, options }) => (
  <select
    value={value}
    onChange={onChange}
    className="browser-default"
  >
    <option key={9999} disabled value="">
      Select option
    </option>
    {options}
  </select>
);

export const DateInput = ({ value, onChange, name, label, required }) => (
  <div className="input-field col s6">
    <input
      type="date"
      id={`${name}-input`}
      value={value}
      onChange={onChange}
      required={required}
    />
    <label htmlFor={`${name}-input`}>{label}</label>
  </div>
);

DateInput.defaultProps = {
  required: true
};
