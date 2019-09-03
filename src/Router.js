import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Import App screens
import Discover from './components/Discover';
import Movie from './components/Movie';

function Router () {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Discover} />
      <Route path='/movie/:id' component={Movie} />
    </BrowserRouter>
  )
}

export default Router;
