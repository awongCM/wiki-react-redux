import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Switch, Route, Link } from 'react-router-dom';
import './WikiForm.scss';

import { connect } from 'react-redux';
import { addWiki, addTag } from '../actions';

//Redux Form coupled with Container Componenets design
class WikiForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    //load Materialize Jquery plugin upon successful mount
    $('.chips').material_chip();
    
    $('.chips-placeholder').material_chip({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
    });
  }

  render() {
    //?? confusing if you mixed up the props between redux form and container components    
    const {handleSubmit, onFormSubmit, wiki} = this.props;

    return (
      <form className="WikiForm" onSubmit={handleSubmit(onFormSubmit)}>
          <div className="input-field">
            <label htmlFor="title" >Title</label>
            <Field name="title" component="input" type="text" id="title"/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <Field name="content" component="input" type="text" id="content"/>
          </div>
          <div className="input-field">
            <label htmlFor="author">Author</label>
            <Field name="author" component="input" type="text" id="author"/>
          </div>
          <div className="input-field">
            <div className="chips chips-placeholder">
              <input id="tags" className="input" placeholder="Enter a tag" />
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
      </form>
    );
  }
}

//Form Decorator
WikiForm = reduxForm({
  form: 'WikiForm'
})(WikiForm);

//Form Container properties
const mapStateToProps = (state, ownProps) => {
  return {
    wiki: state.wiki  //for editing existing wiki content
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFormSubmit: (values) => {
      //obtain chips data
      const chips = $('.chips').material_chip('data'),
            tags = chips.map((chip) => chip.tag);

      let wiki = Object.assign({}, values, {tags: tags})
      dispatch(addWiki(wiki));
      dispatch(addTag(tags));

      alert("Wiki content added!", wiki, tags);

    }
  };
};

const WikiFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WikiForm);

export default WikiFormContainer;
