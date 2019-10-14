import React from "react";
import DeleteBandPopper from "../DeleteBandPopper";
import { client } from "../../utils/Utils";
import { Card } from "../../layout/Card";

const VideoCard = ({ src, videoId, title, description, refetch }) => {
  const handleDelete = () => {
    client()
      .delete(`https://rubato-no.herokuapp.com/api/video/delete/${videoId}`)
      .then(() => {
        refetch(3);
      });
  };

  return (
    <Card
      imageContent={
        <iframe
          src={src}
          frameBorder={0}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={videoId}
          width={"100%"}
        />
      }
    >
      <DeleteBandPopper onDelete={handleDelete} />
      <span className="card-title">{title}</span>
      <p>{description}</p>
    </Card>
  );
};

export default VideoCard;
