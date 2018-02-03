import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteWiki, deleteTag } from '../actions';
import Wiki from '../components/Wiki';

const mapStateToProps = (state, ownProps) => {
  
  const params = ownProps.match.params;

  return {
    id : params.id,
    wiki: state.wikis[params.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteWiki: (id) => {
      //obtain chips data
      const chips = $('.chips').material_chip('data'),
            tags = [] || chips.map((chip) => chip.tag);

      dispatch(deleteWiki(parseInt(id)));
      alert("Wiki content deleted!", id, tags);

    }
  };
};

const WikiContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Wiki));

export default WikiContainer;

