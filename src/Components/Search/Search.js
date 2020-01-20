import React from "react";
import "./Search.css";
import mytube from "../../images/mytube.png";

class Search extends React.Component {
  state = {
    term: ""
  };

  handleOnChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.searchVideo(this.state.term);
    console.log(this.state.term);
  };

  render() {
    return (
      <>
        <div className="col-10 mx-auto my-3 py-3 rounded research-wrapper">
          <img className="mytube" src={mytube} alt=""></img>
          <form className="px-3" onSubmit={this.handleOnSubmit}>
            <div className="form-group row">
              {/* <label for="exampleFormControlInput1">Search ...</label> */}
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Search ..."
                value={this.state.term}
                onChange={this.handleOnChange}
              ></input>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Search;
