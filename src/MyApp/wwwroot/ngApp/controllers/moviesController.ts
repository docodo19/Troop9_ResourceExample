namespace MyApp.Controllers {

    export class MoviesController {
        // will store a list of movies
        public movies;

        constructor(private moviesService: MyApp.Services.MoviesService) {
            // run the getMovies() method as soon as page loads
            this.getMovies();
        }

        getMovies() {
            this.movies = this.moviesService.getAllMovies();
        }
    }


    export class MoviesAddController {
        // will store movie object to create
        public movieToCreate;

        constructor(private moviesService: MyApp.Services.MoviesService, private $state:ng.ui.IStateService) {

        }

        saveMovie() {
            this.moviesService.saveMovie(this.movieToCreate)
                .then(() => {
                    // once the movie has been saved successfully, run this block of code
                    console.log('it worked!');
                    this.$state.go('movies');
                })
                .catch(() => {
                    // run this block of code if it was unsuccessful
                    console.log('something went wrong');
                });
        }
    }

    export class MoviesDeleteController {
        public movieId;
        public movie;

        constructor(
            private moviesService: MyApp.Services.MoviesService,
            $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            this.movieId = $stateParams['id'];
            this.getMovie();
        }
        getMovie() {
            this.movie = this.moviesService.getSingleMovie(this.movieId);
        }
        deleteMovie() {
            this.moviesService.deleteMovie(this.movieId).then(() => {
                this.$state.go('movies');
            });
        }
        cancel() {
            this.$state.go('movies');
        }
    }

    export class MoviesEditController {
        public movieId;
        public movie;

        constructor(
            private moviesService: MyApp.Services.MoviesService,
            $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            this.movieId = $stateParams['id'];
            this.getMovie();
        }

        getMovie() {
            this.movie = this.moviesService.getSingleMovie(this.movieId);
        }
        saveMovie() {
            this.moviesService.saveMovie(this.movie).then(() => {
                this.$state.go('movies');
            });
        }
        cancel() {
            this.$state.go('movies');
        }
    }


}