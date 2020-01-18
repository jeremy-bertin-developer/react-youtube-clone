import React from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.css";

class Search extends React.Component {
    state = {
        term: ""
    };

    handleOnChange = e => {
        this.setState({
            term: e.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.searchVideo(this.state.term)
        console.log(event);
    }


    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="field">
                        <label>Search ...</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.handleOnChange}>

                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;
