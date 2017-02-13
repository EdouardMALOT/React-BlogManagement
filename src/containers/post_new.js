import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/';
import { Link } from 'react-router';

class PostNew extends React.Component {

  static contextTypes = {
    router : PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then( () => {
        //When handle is finished
        this.context.router.push('/');
      })
  }

  render() {

    const {fields: {title, categories, content}, handleSubmit} = this.props;

    return (
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h3>Create a post</h3>
              <div className={`from-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
                  <label>Title</label>
                  <input type="text" className="form-control" {...title}/>
                  <div className="text-help">
                    {title.touched ? title.error : '' }
                  </div>
              </div>


              <div className={`from-group ${categories.touched && categories.invalid ? 'has-danger' : '' }`}>
                  <label>Categories</label>
                  <input type="text" className="form-control" {...categories}/>
                  <div className="text-help">
                    {categories.touched ? categories.error : '' }
                  </div>
              </div>

              <div className={`from-group ${content.touched && content.invalid ? 'has-danger' : '' }`}>
                  <label>Content</label>

                  <textarea className="form-control" {...content}/>
                  <div className="text-help">
                    {content.touched ? content.error : '' }
                  </div>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
              <Link to='/' className="btn btn-danger">Cancel</Link>
          </form>
    );
  }
}

function validate(values) {
  const error = {};

  if(!values.title)       {    error.title = "Enter a title"  }
  if(!values.categories)  {    error.categories = "Enter a categorie"  }
  if(!values.content)     {    error.content = "Entrer a content"  }

  return error;
}


export default reduxForm({
  form: 'PostNewForm',
  fields: [ 'title', 'categories', 'content'],
  validate
}, null, { createPost })(PostNew);
