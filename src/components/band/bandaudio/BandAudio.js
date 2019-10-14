import React, { useState } from "react";

import { Section } from "../../layout/Section";
import SpotifyPlayer from "../../layout/SpotifyPlayer";
import { IconButton } from "../../layout/Buttons";
import Modal from "../../layout/Modal";
import { Card } from "../../layout/Card";

import BandSectionForm from "../bandimages/BandSectionForm";
import DeleteBandPopper from "../DeleteBandPopper";
import { client } from "../../utils/Utils";
import css from "../Band.module.scss";

const BandAudio = ({ audios, setRefetch }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Section
      title={"Audio Section"}
      button={
        <IconButton
          text={"Add album"}
          icon={"playlist_add"}
          classname="blue-grey"
          onClick={() => setShowForm(true)}
        />
      }
    >
      <div className={css.bandVideos}>
        {audios &&
          audios.map(audio => (
            <AudioContent audio={audio} key={audio.idAudio} refetch={setRefetch} />
          ))}
      </div>
      <Modal
        isOpen={showForm}
        title={"Add Spotify Album"}
        onClose={() => setShowForm(false)}
      >
        <BandSectionForm
          form="audio"
          setRefetch={setRefetch}
          setShowForm={setShowForm}
        />
      </Modal>
    </Section>
  );
};

export default BandAudio;

const AudioContent = ({ audio, refetch }) => {
  const handleDelete = () => {
    client()
      .delete(`https://rubato-no.herokuapp.com/api/audio/delete/${audio.idAudio}`)
      .then(() => {
        refetch(5);
      });
  };

  return (
    <Card imageContent={<SpotifyPlayer uri={audio.path} />}>
      <DeleteBandPopper onDelete={handleDelete} />
      <span className="card-title">{audio.name}</span>
      <p>{audio.description}</p>
    </Card>
  );
};
