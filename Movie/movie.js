

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }


    getMovieDetails() {
        return `${this.title} (made the movie on ${this.studio}, ${this.rating})`;
    }
}

// Example :
const myFavoriteMovie = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(myFavoriteMovie.getMovieDetails()); 
