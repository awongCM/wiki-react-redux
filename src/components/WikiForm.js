import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Switch, Route, Link } from 'react-router-dom';
import './WikiForm.scss';

import { connect, dispatch } from 'react-redux';
import { addWiki } from '../actions';

//Redux Form coupled with Container Componenets design
class WikiForm extends Component {
  constructor(props) {
    super(props);
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
    wiki: state.wiki
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFormSubmit: (values) => {
      dispatch(addWiki(values));
    }
  };
};

const WikiFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WikiForm);

export default WikiFormContainer;
