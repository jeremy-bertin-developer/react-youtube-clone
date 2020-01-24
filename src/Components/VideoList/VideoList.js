import React from "react";

class VideoList extends React.Component {
  render() {
    return (
        <div className="col-4 float-right sideBar">
            {this.props.children}
        </div>
    )
  }
}

export default VideoList;
