import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removeWiki } from "../actions";
import Wiki from "../components/Wiki";

const mapStateToProps = (state, ownProps) => {
  const params = ownProps.match.params;

  return {
    id: params.id,
    wiki: state.wikis.find(item => item._id === params.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteWiki: async id => {
      await dispatch(removeWiki(id));
      ownProps.history.push("/wikis");
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
