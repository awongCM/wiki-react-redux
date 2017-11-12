import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wiki.scss';

import SideBarContainer from '../containers/SideBar';

//Wiki component coupled with container component
class Wiki extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const { wiki } = this.props;    

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
          <Link to='/wikis'>Back</Link>
          {/* <Link to='/edit-wiki/'>Edit Wiki</Link> */}
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

const getWikiContentBy = (wikis, id) => {
  return wikis.find((index) => index === id);
}

//Wiki Container properties
const mapStateToProps = (state, ownProps) => {
  
  const params = ownProps.match.params;

  return {
    id : params.id,
    wiki: state.wikis[params.id]
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onFormSubmit: (values) => {
//       //obtain chips data
//       const chips = $('.chips').material_chip('data'),
//             tags = chips.map((chip) => chip.tag);

//       let wiki = Object.assign({}, values, {tags: tags})
//       dispatch(addWiki(wiki));
//       dispatch(addTag(tags));

//       alert("Wiki content added!", wiki, tags);

//     }
//   };
// };

const WikiContainer = withRouter(connect(
  mapStateToProps,
  null
)(Wiki));

export default WikiContainer;

