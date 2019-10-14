import React, { useState } from "react";
import { TextInput } from "../../layout/FieldInput";
import { client } from "../../utils/Utils";
import { SubmitButton } from "../../layout/Buttons";

const VideoForm = ({ setShowForm, setRefetch }) => {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const tempURL = path;
    const p = tempURL;
    //var regex = /&/;
    const youtubeURL = p.split("&");
    const actualURL = youtubeURL[0];
    console.log("Before Split "+tempURL);
    console.log("After Split "+actualURL);
    client()
      .post("https://rubato-no.herokuapp.com/api/video/upload", {
        name: name,
        path: actualURL,
        type: description
      })
      .then(() => {
        setShowForm(false);
        setRefetch(4);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={name}
        onChange={e => setName(e.target.value)}
        label="Video Name"
        name="name"
      />
      <TextInput
        value={path}
        onChange={e => setPath(e.target.value)}
        label="Video Link"
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
  );
};

export default VideoForm;
