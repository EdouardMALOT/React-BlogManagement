import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './containers/post_index';
import PostNew from './containers/post_new';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostIndex}/>   //Root route
    <Route path="posts/new" component={PostNew}/>   //Root route
  </Route>
);
