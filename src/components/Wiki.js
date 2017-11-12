import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import './Wiki.scss';
import { connect } from 'react-redux';
import { deleteWiki, deleteTag } from '../actions';

import SideBarContainer from '../containers/SideBar';

//Wiki component coupled with container component
class Wiki extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const { wiki, id } = this.props;    

    let wikiContent = null;

    if (!wiki) {
      wikiContent = (
        <div className="content">
          <h1>There is no wiki content</h1>
          <Link to='/wikis'>Back</Link>
        </div>
      );
    } else {
      wikiContent = (
        <div className="content">
          <h1>{wiki.title}</h1>
          <div className="desription">
            <p>{wiki.content}</p>
          </div>
          <div className="chips chips-initial">
            {
              wiki.tags.map(tag => <div className="chip">{tag}</div> )
            }
          </div>
          <div className="links">
            <Link className="link" to='/wikis'>Back</Link>
            <Link className="link" to={`/edit-wiki/${id}`}>Edit Wiki</Link>
            <button onClick={onDeleteWiki}></button>
          </div>
        </div>
      )
    }

    //TODO - use multiple components per route
    return (
      <div className="row">
        <div className="col s3">
          <SideBarContainer></SideBarContainer>
        </div>
        <div className="col s9">
          <div className="Wiki">
            {wikiContent}
          </div>
        </div>
      </div>  
    )
  }
}

//Wiki Container properties
const mapStateToProps = (state, ownProps) => {
  
  const params = ownProps.match.params;

  return {
    id : params.id,
    wiki: state.wikis[params.id]
  };
};

//TODO
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteWiki: (id) => {
      //obtain chips data
      const chips = $('.chips').material_chip('data'),
            tags = chips.map((chip) => chip.tag);

      dispatch(deleteWiki(id));
      dispatch(deleteTag(tags));

      alert("Wiki content deleted!", id, tags);

    }
  };
};

const WikiContainer = withRouter(connect(
  mapStateToProps,
  null
)(Wiki));

export default WikiContainer;

