//TODO - to implement

import { connect } from 'react-redux';
import { setTagFilter } from '../actions';
import SideBar from '../components/SideBar';

const getAllUniqueTags = (tags) => {
      
  //only unique tags
  return tags.filter( (item, i) => tags.indexOf(item) === i );
};

const mapStateToProps = (state, ownProps) => {
  return {
    tags: getAllUniqueTags(state.tags),
    totalTags: getAllUniqueTags(state.tags).length,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTagClick: tag => {
      dispatch(toggleWikis(tag));
    }
  };
};

const SideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

export default SideBarContainer;