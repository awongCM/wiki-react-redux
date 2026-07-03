import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import "./WikiForm.scss";

import { connect } from "react-redux";
import { createWiki, saveWiki } from "../actions";

class WikiForm extends Component {
  componentDidUpdate() {
    if (typeof this.props.tags !== "null" && this.props.tags) {
      $(".chips-placeholder").material_chip({
        data: this.props.tags,
        placeholder: "Enter a tag",
        secondaryPlaceholder: "+Tag"
      });
    } else {
      $(".chips-placeholder").material_chip({
        placeholder: "Enter a tag",
        secondaryPlaceholder: "+Tag"
      });
    }

    Materialize.updateTextFields();
  }

  render() {
    const { handleSubmit, onFormSubmit, submitting } = this.props;

    return (
      <form className="WikiForm" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <Field
            name="title"
            component="input"
            type="text"
            id="title"
            className="validate"
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <Field
            name="content"
            component="textarea"
            id="content"
            className="materialize-textarea validate"
          />
        </div>
        <div className="input-field">
          <label htmlFor="author">Author</label>
          <Field
            name="author"
            component="input"
            type="text"
            id="author"
            className="validate"
          />
        </div>
        <div className="input-field">
          <div className="chips chips-initial chips-placeholder">
            <input id="tags" className="input" placeholder="Enter a tag" />
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          disabled={submitting}
        >
          Submit
        </button>
      </form>
    );
  }
}

WikiForm = reduxForm({
  form: "WikiForm",
  enableReinitialize: true
})(WikiForm);

const parsePropsTagsData = tags => {
  return tags !== null
    ? tags.map(item => Object.assign({}, { tag: item }))
    : null;
};

const mapStateToProps = (state, ownProps) => {
  const params = ownProps.match.params;
  const wiki = state.wikis.find(item => item._id === params.id);
  const tags = typeof wiki !== "undefined" ? wiki.tags : null;

  return {
    id: params.id,
    initialValues: wiki,
    tags: parsePropsTagsData(tags)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFormSubmit: async values => {
      const chips = $(".chips").material_chip("data");
      const tags = chips.map(chip => chip.tag);
      const wiki = Object.assign({}, values, { tags });
      const wikiId = ownProps.match.params.id;

      try {
        if (typeof wikiId === "undefined") {
          await dispatch(createWiki(wiki));
        } else {
          await dispatch(saveWiki(wikiId, wiki));
        }
        ownProps.history.push("/wikis");
      } catch (error) {
        alert(`Failed to save wiki: ${error.message}`);
      }
    }
  };
};

const WikiFormContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WikiForm)
);

export default WikiFormContainer;
