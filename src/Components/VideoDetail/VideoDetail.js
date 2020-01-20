import React from "react";
import "./VideoDetail.css";
//import VideoItem from "../VideoItem/VideoItem";

class VideoDetail extends React.Component {
  render() {
    const { idVideo, description } = this.props;

    return (
      <div class="card col-8 float-left video-detail border-0">
        <iframe
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/${idVideo}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="card-body">
          <p class="card-text">{description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
