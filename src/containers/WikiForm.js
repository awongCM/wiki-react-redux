//TODO - defunct...

import { connect } from 'react-redux';
import { addWiki } from '../actions';
import WikiForm from '../components/WikiForm';

const mapStateToProps = (state, ownProps) => {
  return {
    wiki: ownProps.wiki
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: () => {
      dispatch(addWiki(ownProps.wiki));
    }
  }
}

const WikiFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WikiForm)

export default WikiFormContainer;