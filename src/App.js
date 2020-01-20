import React from "react";
import "./App.css";

import Search from "./Components/Search/Search";
import VideoDetail from "./Components/VideoDetail/VideoDetail";
import VideoList from "./Components/VideoList/VideoList";

import youtube from "./configs/youtube"; // youtube = axios
import "bootstrap/dist/css/bootstrap.css";
import VideoItem from "./Components/VideoItem/VideoItem";

class App extends React.Component {
  state = {
    videos: [],
    description: "",
    listVideo: []
  };


  componentDidMount = async () => {
    const RESPONSE = await youtube.get("/search", {
      params: {
        q: "trending",
      }
    });
    const idVideo = RESPONSE.data.items[0].id.videoId;
    const description = RESPONSE.data.items[0].snippet.description;

    const listVideo = RESPONSE.data.items.map(el => {
      return <VideoItem onClick={this.handleVideoOnClick}  idVideo={el.id.videoId} description={el.snippet.description}/>
    })

    this.setState({
      videos: idVideo,
      description: description,
      listVideo: listVideo
    })
  }

  searchVideo = async term => {
    const RESPONSE = await youtube.get("/search", {
      params: {
        q: term,
      }
    });
    // console.log(RESPONSE.data.items[0].id.videoId)
    // console.log(RESPONSE.data.items[0].snippet.description)
    const idVideo = RESPONSE.data.items[0].id.videoId;
    const description = RESPONSE.data.items[0].snippet.description;
    console.log(description)

    const listVideo = RESPONSE.data.items.map(el => {
      return <VideoItem onClick={this.handleVideoOnClick} idVideo={el.id.videoId} description={el.snippet.description}/>
    })

  //   let monitor = setInterval(function(){
  //     let elem = document.activeElement;
  //     if(elem && elem.tagName == 'IFRAME'){
  //         clearInterval(monitor);
  //         alert('clicked!');
  //     }
  // }, 100);


    this.setState({
      videos: idVideo,
      description: description,
      listVideo: listVideo
    })
  };

  handleVideoOnClick = () => {
    console.log("hello")
  }

  render() {
    return (
      <>
        <header className="container-fluid">
          <div className="row">
            <Search searchVideo={this.searchVideo} />
          </div>
        </header>
        <main className="container-fluid">
          <div className="row">
            <VideoDetail idVideo={this.state.videos} description={this.state.description}/>
            <VideoList onMouseDown={this.handleVideoOnClick}>
              {this.state.listVideo}
            </VideoList>
          </div>
        </main>
      </>
    );
  }
}

export default App;
