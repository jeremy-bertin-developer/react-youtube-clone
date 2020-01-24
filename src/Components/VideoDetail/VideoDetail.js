import React from "react";

class VideoDetail extends React.Component {
  render() {
    const { idVideo, description } = this.props;

    return (
      <div className="col-8 float-left">
        <div className="card col-7 videoDetail mx-auto text-center border-0 bg-light shadow position-fixed">
          <div className="card-body">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${idVideo}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
