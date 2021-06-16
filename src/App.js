import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Loader from './components/Loader/Loader.jsx';
import Navigation from './components/Navigation/Navigation';

const AsyncComponentHomePage = lazy(() =>
  import('./components/Home/Home' /* webpackChunkName: "HomePage" */),
);
const AsyncComponentMoviesPage = lazy(() =>
  import('./components/Movies/Movies' /* webpackChunkName: "MoviesPage" */),
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
    <Suspense fallback={<Loader />}>
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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
