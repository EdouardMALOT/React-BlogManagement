import React from 'react'
import { fetchPost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class PostIndex extends React.Component {

  componentWillMount() {
    this.props.fetchPost();
  }

  render() {
    console.log('list of posts :', this.props.post)
    return(
        <div className="text-xs-right">
            <Link to='posts/new' className="btn btn-primary">
                Add a post
            </Link>
        </div>
    );
  }
}


function mapStateToProps(state) {
  return {post : state.post}
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPost}, dispatch);
// }

export default connect(null,{fetchPost})(PostIndex);
