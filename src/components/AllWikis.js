import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AllWikis.scss";

import SideBarContainer from "../containers/SideBar";

class AllWikis extends Component {
  showDateFormat(createdAt) {
    return new Date(createdAt).toUTCString();
  }

  render() {
    const { wikis, loading, error } = this.props;

    if (loading) {
      return <div className="AllWikis"><p>Loading wikis...</p></div>;
    }

    if (error) {
      return (
        <div className="AllWikis">
          <p className="red-text">Error loading wikis: {error}</p>
          <p>Make sure the API server and MongoDB are running.</p>
        </div>
      );
    }

    let allWikisContent = (
      <h1>You do not have any wiki content at present</h1>
    );

    if (wikis.length > 0) {
      allWikisContent = (
        <ul>
          {wikis.map(wiki => (
            <li key={wiki._id}>
              <div className="content">
                <Link to={`/wiki/${wiki._id}`}>
                  <h4>{wiki.title}</h4>
                </Link>
                <p>{wiki.content}</p>
                <small>Author: {wiki.author}</small>
                {wiki.createdAt && (
                  <small> | Created: {this.showDateFormat(wiki.createdAt)}</small>
                )}
              </div>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="row">
        <div className="col s3">
          <SideBarContainer />
        </div>
        <div className="col s9">
          <div className="AllWikis">{allWikisContent}</div>
        </div>
      </div>
    );
  }
}

export default AllWikis;
