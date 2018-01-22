import { connect } from 'react-redux';
import { setTagFilter } from '../actions';
import SideBar from '../components/SideBar';

const getAllUniqueTags = (wikis) => {
  let unique_tags = [], tags;
  if(wikis.length > 0){
    tags = wikis.map((wiki)=>wiki.tags).reduce((prev, curr) => prev.concat(curr));
    unique_tags = tags.filter( (item, i) => tags.indexOf(item) === i );
  }
  return unique_tags;
};

const mapStateToProps = (state, ownProps) => {
  // TODO: to decide whether it's worth to have tags reducer for this
  return {
    tags: getAllUniqueTags(state.wikis),
    totalTags: getAllUniqueTags(state.wikis).length,
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