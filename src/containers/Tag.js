import { connect } from "react-redux";
import { filterWiki, setTagFilter, TagFilters } from "../actions";
import Tag from "../components/Tag";

const mapStateToProps = state => {
  return {
    tagFilter: state.tagFilter,
    activeTag: state.activeTag
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTagClick: tag => {
      dispatch(filterWiki(tag));
      dispatch(setTagFilter(TagFilters.SHOW_SELECTED_TAG));
    }
  };
};

const TagContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag);

export default TagContainer;
