namespace MyApp.Services {

    export class MoviesService {
        // this will hold the resource object pointing to /api/movies
        public moviesResource;

        constructor(private $resource: ng.resource.IResourceService) {
            // add a resource object pointing to /api/movies to this.movieResource
            this.moviesResource = $resource('/api/movies/:id');
        }

        //CRUD - Read: Get all movies
        getAllMovies() {
            return this.moviesResource.query();
        }
        //CRUD - Read: Get single movie
        getSingleMovie(movieId) {
            return this.moviesResource.get({ id: movieId });
        }

        //CRUD - Create: Create a single movie
        saveMovie(movie) {
            return this.moviesResource.save(movie).$promise;
        }

        //CRUD - Delete: Deletes a single movie
        deleteMovie(movieId) {
            return this.moviesResource.delete({ id: movieId }).$promise;
        }


    }
    // Add MoviesService to the angular module called "MyApp"
    angular.module("MyApp").service('moviesService', MoviesService);

}