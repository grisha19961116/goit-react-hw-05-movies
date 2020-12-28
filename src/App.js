import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

const AsyncComponentHomePage = lazy(() =>
  import('./components/HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);
const AsyncComponentMoviesPage = lazy(() =>
  import(
    './components/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */
  ),
);
const AsyncComponentDetailsMovie = lazy(() =>
  import(
    './components/DetailsMovie/DetailsMovie' /* webpackChunkName: "DetailsMovie" */
  ),
);
const AsyncComponentCast = lazy(() =>
  import('./components/Cast/Cast.jsx' /* webpackChunkName: "Cast" */),
);
const AsyncComponentReview = lazy(() =>
  import('./components/Review/Review' /* webpackChunkName: "Review" */),
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navigation />
            <AsyncComponentHomePage />
          </Route>
          <Route exact path="/movies">
            <Navigation />
            <AsyncComponentMoviesPage />
          </Route>
          <Route path="/movies/:id">
            <AsyncComponentDetailsMovie />
            <Route exact path="/movies/:id/cast">
              <AsyncComponentCast />
            </Route>
            <Route exact path="/movies/:id/review">
              <AsyncComponentReview />
            </Route>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
