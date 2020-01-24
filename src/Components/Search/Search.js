import React from "react";
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
    let term = this.state.term;
    this.props.searchVideo(term);
    // console.log(term);
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg shadow navbar-light bg-light col-12 mx-auto mb-3 py-3 position-fixed">
          <a class="navbar-brand" href="#">
            <img className="mytube" src={mytube} alt=""></img>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline w-100" onSubmit={this.handleOnSubmit}>
              <input
                style={{ width: "inherit" }}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Search ..."
                value={this.state.term}
                onChange={this.handleOnChange}
              ></input>
            </form>
          </div>
        </nav>
      </>
    );
  }
}

export default Search;
