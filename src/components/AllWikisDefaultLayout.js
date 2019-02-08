import React, { Component } from "react";

class AllWikisDefaultLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { main, sidebar } = this.props;

    return (
      <div className="row">
        <div className="col s3">{sidebar}</div>
        <div className="col s9">{main}</div>
      </div>
    );
  }
}

export default AllWikisDefaultLayout;
