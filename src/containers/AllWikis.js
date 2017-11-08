//TODO - to implement

import { connect } from 'react-redux';
import { setTagFilter, toggleWikis } from '../actions';
import AllWikis from '../components/AllWikis';

const getVisibleWikis = (wikis, tag, filter) => {
  switch (filter) {
    case 'SHOW_ALL_TAGS':
      return wikis;
    case 'SHOW_SELECTED_TAG':
      return wikis.filter(w => w.tag === tag);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    wikis: getVisibleWikis(state.wikis, state.tag, state.tagFilter)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTagClick: tag => {
      dispatch(toggleWikis(tag))
    }
  }
}

const AllWikisContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllWikis)

export default AllWikisContainer;