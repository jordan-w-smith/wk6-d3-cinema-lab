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

Cinema.prototype.checkFilmsByYear = function (year) {
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
  let total = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return total;

}

Cinema.prototype.filterFilmsByYear = function (year) {
  const foundFilms = this.films.filter((film) => film.year === year)
  return foundFilms
}

Cinema.prototype.filmsByProperty = function (nameOfProperty, valueOfProperty) {
  const foundFilms = this.films.filter((film) => film[nameOfProperty] === valueOfProperty)
  return foundFilms;
};






module.exports = Cinema;
