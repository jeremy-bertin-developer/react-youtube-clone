import React from "react";
import VideoItem from "../VideoItem/VideoItem";

class VideoList extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
        <div className="col-4 float-right">
            {this.props.children}
        </div>
    )
  }
}

export default VideoList;
