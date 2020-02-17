import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getFilteredMovies = (movies, input) => movies
  .filter(movie => movie.title.toLowerCase().includes(input)
  || movie.description.toLowerCase().includes(input));

export class App extends Component {
  state = {
    query: '',
  };

  render() {
    const { query } = this.state;
    const filteredMovies = getFilteredMovies(moviesFromServer, query);

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={((event) => {
                    this.setState({
                      query: event.target.value.toLowerCase(),
                    });
                  })}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
