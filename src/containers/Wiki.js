import { Switch, Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteWiki, removeTags } from "../actions";
import Wiki from "../components/Wiki";

const mapStateToProps = (state, ownProps) => {
  const params = ownProps.match.params;

  return {
    id: params.id,
    wiki: state.wikis[params.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteWiki: id => {
      dispatch(deleteWiki(parseInt(id)));
    },
    onRemoveTags: tags => {
      dispatch(removeTags(tags));
    }
  };
};

const WikiContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wiki)
);

export default WikiContainer;
