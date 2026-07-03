import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wiki.scss";

import SideBarContainer from "../containers/SideBar";

class Wiki extends Component {
  render() {
    const { onDeleteWiki, wiki, id } = this.props;

    let wikiContent = null;

    if (!wiki) {
      wikiContent = (
        <div className="content">
          <h1>There is no wiki content</h1>
          <Link to="/wikis">Back</Link>
        </div>
      );
    } else {
      wikiContent = (
        <div className="content">
          <h1>{wiki.title}</h1>
          <div className="desription">
            <p>{wiki.content}</p>
          </div>
          <div id="wiki-chips" className="chips chips-initial">
            {(wiki.tags || []).map(tag => (
              <div className="chip" key={tag}>
                {tag}
              </div>
            ))}
          </div>
          <div className="links">
            <Link className="link" to="/wikis">
              Back
            </Link>
            <Link className="link" to={`/wiki/edit/${id}`}>
              Edit Wiki
            </Link>
            <button
              className="waves-effect waves-light btn"
              onClick={() => onDeleteWiki(id)}
            >
              Delete Wiki
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col s3">
          <SideBarContainer />
        </div>
        <div className="col s9">
          <div className="Wiki">{wikiContent}</div>
        </div>
      </div>
    );
  }
}

export default Wiki;
