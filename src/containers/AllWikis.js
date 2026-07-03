import { connect } from "react-redux";
import { TagFilters } from "../actions";
import AllWikis from "../components/AllWikis";

const { SHOW_SELECTED_TAG } = TagFilters;

const getVisibleWikis = (wikis, tagFilter) => {
  if (tagFilter === SHOW_SELECTED_TAG) {
    return wikis.filter(wiki => wiki.selected);
  }
  return wikis;
};

const mapStateToProps = state => {
  return {
    wikis: getVisibleWikis(state.wikis, state.tagFilter),
    loading: state.loading,
    error: state.error
  };
};

const AllWikisContainer = connect(mapStateToProps)(AllWikis);

export default AllWikisContainer;
