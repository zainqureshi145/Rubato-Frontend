import React, { useState } from "react";
import PropTypes from "prop-types";

import { client } from "../../utils/Utils";
import { TextInput } from "../../layout/FieldInput";
import { SubmitButton } from "../../layout/Buttons";

const BandSectionForm = ({ setShowForm, setRefetch, form }) => {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    client()
      .post(`https://rubato-no.herokuapp.com/api/${form}/upload`, {
        name: name,
        path: path,
        description: description
      })
      .then(() => {
        setShowForm(false);
        setRefetch(6);
      });
  };

  return (
    <div className="container center-align">
      <form onSubmit={handleSubmit}>
        <TextInput
          value={name}
          onChange={e => setName(e.target.value)}
          label={form === "image" ? "Image Name" : "Album Name"}
          name="name"
        />
        <TextInput
          value={path}
          onChange={e => setPath(e.target.value)}
          label={form === "image" ? "Image Link" : "Album Link"}
          name="path"
        />
        <TextInput
          value={description}
          onChange={e => setDescription(e.target.value)}
          label="Description"
          name="description"
        />
        <SubmitButton name={"Submit"} />
      </form>
    </div>
  );
};

BandSectionForm.propTypes = {
  form: PropTypes.string.isRequired
};

BandSectionForm.defaultProps = {
  form: "image"
};

export default BandSectionForm;
