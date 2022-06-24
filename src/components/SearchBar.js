import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <h1 style={{ textAlign: "center" }}>Search Pictures</h1>
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <input
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
