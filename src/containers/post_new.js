import React from 'react';
import { connect } from 'react-redux';

class PostNew extends React.Component {

  render() {
    return (
        <div>
        New post !
            <form>
            </form>
        </div>
    );
  }
}

export default connect(null, null)(PostNew);
