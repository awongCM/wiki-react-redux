import { connect } from 'react-redux';
import { setTagFilter, filterWiki, TagFilters } from '../actions';
import Tag from '../components/Tag';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedTag: ownProps.tagFilter === state.tagFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTagClick: (tag) => {
      dispatch(filterWiki(tag));
      dispatch(setTagFilter(TagFilters.SHOW_SELECTED_TAG));
      
      console.log("filterWiki: ", tag);
    }
  };
};

const TagContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag);

export default TagContainer;