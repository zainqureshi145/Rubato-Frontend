import React from "react";
import PropTypes from "prop-types";

const dimensionPropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string
]);

// Size presets, defined by Spotify
const sizePresets = {
  large: {
    width: 300,
    height: 380
  },
  compact: {
    width: 300,
    height: 80
  }
};

const SpotifyPlayer = ({uri, view, theme, size}) => {
  if (typeof size === "string") {
    size = sizePresets[size];
  }

  return (
    <iframe
      title="Spotify"
      className="SpotifyPlayer"
      src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
      width={size.width}
      height={size.height}
      frameBorder="0"
      allowtransparency="true"
    />
  );
};

SpotifyPlayer.propTypes = {
  uri: PropTypes.string.isRequired,

  size: PropTypes.oneOfType([
    PropTypes.oneOf(["large", "compact"]),
    PropTypes.shape({
      width: dimensionPropType,
      height: dimensionPropType
    })
  ]),
  view: PropTypes.oneOf(["list", "coverart"]),
  theme: PropTypes.oneOf(["black", "white"])
};

SpotifyPlayer.defaultProps = {
  size: "large",
  view: "list",
  theme: "black"
};

export default SpotifyPlayer;
