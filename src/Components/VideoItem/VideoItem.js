import React from "react";

class VideoItem extends React.Component {
  render() {
    const { idVideo, description, onMouseDown } = this.props;
    return (
      <>
        <iframe
          onMouseDown={onMouseDown}
          src={`https://www.youtube.com/embed/${idVideo}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p class="card-text">{description}</p>
      </>
    );
  }
}

export default VideoItem;
