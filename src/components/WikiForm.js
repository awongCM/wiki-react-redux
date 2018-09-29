import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import "./WikiForm.scss";

import { connect } from "react-redux";
import { addWiki, addTags, updateWiki } from "../actions";

//Redux Form coupled with Container Componenets design
class WikiForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    //load Materialize Jquery plugin upon successful update

    if (typeof this.props.tags !== "null") {
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

    //load prefilling input
    Materialize.updateTextFields();
  }

  render() {
    //?? confusing if you mixed up the props between redux form and container components
    const { handleSubmit, onFormSubmit, wiki, id, tags } = this.props;

    return (
      <form className="WikiForm" key={id} onSubmit={handleSubmit(onFormSubmit)}>
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
            component="input"
            type="text"
            id="content"
            className="validate"
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
        >
          Submit
        </button>
      </form>
    );
  }
}

//Form Decorator
WikiForm = reduxForm({
  form: "WikiForm"
})(WikiForm);

//Form Container properties and methods
const parsePropsTagsData = tags => {
  return tags !== null
    ? tags.map(item => Object.assign({}, { tag: item }))
    : null;
};

const mapStateToProps = (state, ownProps) => {
  const params = ownProps.match.params;
  const wiki = state.wikis[params.id];
  const tags = typeof wiki !== "undefined" ? wiki.tags : null;

  return {
    id: params.id,
    initialValues: wiki, //for editing existing wiki content
    tags: parsePropsTagsData(tags)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFormSubmit: values => {
      //obtain chips data
      const chips = $(".chips").material_chip("data"),
        tags = chips.map(chip => chip.tag);

      let wiki = Object.assign({}, values, { tags: tags });

      //ownprops properties are bound by injected withRouter
      const wiki_id = ownProps.match.params.id;

      if (typeof wiki_id === "undefined") {
        dispatch(addWiki(wiki));
        dispatch(addTags(tags));
        alert("Wiki content added!", wiki, tags);
      } else {
        dispatch(updateWiki(parseInt(wiki_id), wiki));
        alert("Wiki content updated!", wiki, tags);
      }
    }

    //how to handle formupdate
  };
};

const WikiFormContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WikiForm)
);

export default WikiFormContainer;
