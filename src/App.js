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
          <Route exact path="/movies/:id">
            <AsyncComponentDetailsMovie />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
