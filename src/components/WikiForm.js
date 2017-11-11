import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { Switch, Route, Link } from 'react-router-dom';
import './WikiForm.scss';

class WikiForm extends Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <form className="WikiForm" onSubmit={handleSubmit}>
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

WikiForm = reduxForm({
  form: 'WikiForm'
})(WikiForm);

export default WikiForm;
