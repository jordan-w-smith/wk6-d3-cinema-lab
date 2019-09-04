const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titles = this.films.map(function(film) {
    return film.title;

  });

  return titles;
}

Cinema.prototype.searchFilmByTitle = function (title) {
  return this.films.filter((film) => film.title === title )[0]
}

Cinema.prototype.searchFilmByGenre = function (genre) {
  return this.films.filter((film) => film.genre === genre)
}

Cinema.prototype.searchFilmsByYear = function (year) {
  const foundFilms = this.films.filter((film) => film.year === year)
  if (foundFilms.length > 0) {
    return true
  }
  else {
    return false
  }
}

Cinema.prototype.checkLengthGreaterThan = function (length) {
  const foundFilms = this.films.filter((film) => film.length > length)
  if (foundFilms.length === 5) {
    return true
  }
  else {
    return false
  }
}

Cinema.prototype.totalRunningTimeOfFilms = function () {
  return total = this.films.reduce((runningTotal, film.length) => {
    return runningTotal + film.length
  })
}







module.exports = Cinema;
