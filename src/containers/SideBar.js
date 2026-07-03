import { connect } from "react-redux";
import {
  filterWiki,
  setTagFilter,
  clearTagFilter,
  TagFilters
} from "../actions";
import SideBar from "../components/SideBar";

const getAllUniqueTags = wikis => {
  const tags = wikis.reduce(
    (acc, wiki) => acc.concat(wiki.tags || []),
    []
  );
  return tags.filter((item, index) => tags.indexOf(item) === index);
};

const mapStateToProps = state => {
  return {
    tags: getAllUniqueTags(state.wikis),
    totalTags: getAllUniqueTags(state.wikis).length,
    tagFilter: state.tagFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTagClick: tag => {
      dispatch(filterWiki(tag));
      dispatch(setTagFilter(TagFilters.SHOW_SELECTED_TAG));
    },
    onShowAllClick: () => {
      dispatch(clearTagFilter());
    }
  };
};

const SideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

export default SideBarContainer;
