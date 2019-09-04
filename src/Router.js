import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ErrorHandler from './components/ErrorHandler';
import Loading from './components/ui/Loading';
// Import App screens
const Discover = React.lazy(() => import('./components/Discover'));
const Movie = React.lazy(() => import('./components/Movie'));

function Router () {
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ErrorHandler>
          <Route path='/' exact component={Discover} />
          <Route path='/movie/:id' component={Movie} />
        </ErrorHandler>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default Router;
