import React from "react";
import css from "../band/Band.module.scss";
import { Card } from "../layout/Card";
import { createYouTubeEmbedLink } from "../utils/Utils";
import { Section } from "../layout/Section";
import SpotifyPlayer from "../layout/SpotifyPlayer";

export const ReadOnlyVideoSection = ({ user }) => (
  <Section title={"Video Section"} showFullUnderline>
    <div className={css.bandVideos}>
      {user.video &&
        user.video.map(video => (
          <Card
            imageContent={
              <iframe
                src={createYouTubeEmbedLink(video.path)}
                frameBorder={0}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={video.idVideo}
                width={"100%"}
              />
            }
            key={video.idVideo}
          >
            <span className="card-title">{video.name}</span>
            <p>{video.type}</p>
          </Card>
        ))}
    </div>
  </Section>
);

export const ReadOnlyImageSection = ({ user }) => (
  <Section title={"Image Section"} showFullUnderline>
    <div className={css.bandVideos}>
      {user.images &&
        user.images.map(image => (
          <Card
            imageContent={<img src={image.path} alt="new" />}
            key={image.idImage}
          >
            <span className="card-title">{image.name}</span>
            <p>{image.description}</p>
          </Card>
        ))}
    </div>
  </Section>
);

export const ReadOnlyAudioSection = ({ user }) => {
  return (
    <Section title="Audio Section" showFullUnderline>
      <div className={css.bandVideos}>
        {user.audio &&
          user.audio.map(audio => (
            <SpotifyPlayer uri={audio.path} key={audio.idAudio} />
          ))}
      </div>
    </Section>
  );
};
