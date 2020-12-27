import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import s from './App.module.css';
import api from './API/api.js';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import DetailsMovie from './components/DetailsMovie/DetailsMovie';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route exact path="/movies/:id">
            <DetailsMovie />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
