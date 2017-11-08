//TODO - to implement

import { connect } from 'react-redux';
import { setTagFilter } from '../actions';
import SideBar from '../components/SideBar';


const mapStateToProps = (state, ownProps) => {
  return {
    tag: state.tag
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTagClick: tag => {
      dispatch(toggleWikis(tag))
    }
  }
}

const SideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

export default SideBarContainer;