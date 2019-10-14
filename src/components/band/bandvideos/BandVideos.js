import React, { useState } from "react";
import css from "../Band.module.scss";
import { createYouTubeEmbedLink } from "../../utils/Utils";
import { IconButton } from "../../layout/Buttons";
import { Section } from "../../layout/Section";
import Modal from "../../layout/Modal";
import VideoCard from "./VideoCard";
import VideoForm from "./VideoForm";

const BandVideos = ({ videos, setRefetch }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Section
      title={"Video Section"}
      button={
        <IconButton
          text={"Add video"}
          icon={"playlist_add"}
          classname="blue-grey"
          onClick={() => setShowForm(true)}
        />
      }
    >
      <div className={css.bandVideos}>
        {videos && videos.map(video => (
          <VideoCard
            title={video.name}
            src={createYouTubeEmbedLink(video.path)}
            description={video.type}
            videoId={video.idVideo}
            key={video.idVideo}
            refetch={setRefetch}
          />
        ))}
      </div>
      <Modal
        isOpen={showForm}
        title={"Add Video Form"}
        onClose={() => setShowForm(false)}
      >
        <div className="container center-align">
          <VideoForm setShowForm={setShowForm} setRefetch={setRefetch} />
        </div>
      </Modal>
    </Section>
  );
};

export default BandVideos;
