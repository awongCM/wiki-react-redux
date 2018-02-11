// TODO - to implement

import { connect } from 'react-redux';
import { setTagFilter, toggleWikis } from '../actions';
import Tag from '../components/Tag';

const getVisibleWikis = (wikis, tag, filter) => {
  switch (filter) {
    case 'SHOW_ALL_TAGS':
      return wikis;
    case 'SHOW_SELECTED_TAG':
      return wikis.filter(wiki => wiki.tag === tag);
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    tag: getSelectedTag(state.wikis, state.tagFilter)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTagClick: tag => {
      dispatch(toggleWikis(tag))
    }
  };
};

const TagContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllWikis);

export default TagContainer;