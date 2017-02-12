import React from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/';

class PostNew extends React.Component {

  render() {

    const {fields: {title, categories, content}, handleSubmit} = this.props;

    return (
          <form onSubmit={handleSubmit(this.props.createPost)}>
              <h3>Create a post</h3>

              <div className="from-group">
                  <label>Title</label>
                  <input type="text" className="form-control" {...title}/>
              </div>

              <div className="from-group">
                  <label>Categories</label>
                  <input type="text" className="form-control" {...categories}/>
              </div>

              <div className="from-group">
                  <label>Content</label>
                  <textarea className="form-control" {...content}/>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
    );
  }
}

export default reduxForm({
  form: 'PostNewForm',
  fields: [ 'title', 'categories', 'content']
}, null, { createPost })(PostNew);
