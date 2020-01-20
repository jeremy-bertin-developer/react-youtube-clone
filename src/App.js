import React from "react";
import "./App.css";

import Search from "./Components/Search/Search";
import VideoDetail from "./Components/VideoDetail/VideoDetail";

import youtube from "./configs/youtube"; // youtube = axios
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = {
    videos: []
  };

  componentDidMount() {
    this.searchVideo("cats");
  }

  searchVideo = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Search searchVideo={this.searchVideo} />
          <VideoDetail />
        </div>
      </div>
    );
  }
}

export default App;
