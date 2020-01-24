import React from "react";

class VideoItem extends React.Component {
  render() {
    const { idVideo, description, onClick, src } = this.props;
    return (
      <>
        <div onClick={onClick} idVideo={idVideo} className="card mb-3 border-0 shadow videoItem">
          <img src={src} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <p className="card-text">
              {description}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default VideoItem;
