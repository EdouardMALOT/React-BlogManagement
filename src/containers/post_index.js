import React from 'react'
import { fetchPost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class PostIndex extends React.Component {

  componentWillMount() {
    this.props.fetchPost();
  }

  renderPosts() {
    console.log('list of posts :', this.props.posts)
    return this.props.posts.map( (post) => {
        return (
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <span className="pull-xs-right">{post.categories}</span>
              <strong>{post.title}</strong>
            </Link>
          </li>
        );
    });
  }

  render() {

    return(
        <div>
            <div className="text-xs-right">
                <Link to='posts/new' className="btn btn-primary">
                    Add a post
                </Link>
            </div>
            <h3>Posts</h3>
            <ul className="list-group">
              {this.renderPosts()}
            </ul>
        </div>
    );
  }
}


function mapStateToProps(state) {
  return {posts : state.post.all}
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPost}, dispatch);
// }

export default connect(mapStateToProps,{fetchPost})(PostIndex);
