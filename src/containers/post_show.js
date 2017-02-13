import React, { PropTypes } from 'react';
import { fetchAPost, deletePost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PostShow extends React.Component {

  static contextTypes = {
    router : PropTypes.object
  };

  componentWillMount() {
    this.props.fetchAPost(this.props.params.id);
  }

  onDelete(props) {
    this.props.deletePost(this.props.params.id)
      .then( () => {
        //When handle is finished
        this.context.router.push('/');
      })
  }


  render() {
    console.log("post: ", this.props.post);

    if(!this.props.post) {
      return <div>Loading...</div>;
    }

    const { post } = this.props;

    return(
      <div>
        <Link to=""> &lt; Back to index</Link>

        <button onClick={this.onDelete.bind(this)}className="btn btn-danger pull-xs-right">Delete</button>

        <h3>{post.title}</h3>
        <h6>Categorie : {post.categories}</h6>
        <p>{post.content}</p>

      </div>

    );
  }

}


function mapStateToProps(state) {
  return {post : state.post.post}
}

export default connect(mapStateToProps,{fetchAPost, deletePost})(PostShow);
