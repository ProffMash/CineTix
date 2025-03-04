import React, { useState, useEffect } from 'react';
import { Star, Calendar, Clock, ThumbsUp, Award } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  releaseYear: number;
  duration: string;
  director: string;
  cast: string[];
  description: string;
  imageUrl: string;
  featured?: boolean;
}

const Suggestions: React.FC = () => {
  const [movies] = useState<Movie[]>([
    {
      id: 1,
      title: 'Inception',
      genre: 'Sci-Fi',
      rating: 4.8,
      releaseYear: 2010,
      duration: '2h 28m',
      director: 'Christopher Nolan',
      cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      featured: true
    },
    {
      id: 2,
      title: 'The Dark Knight',
      genre: 'Action',
      rating: 4.9,
      releaseYear: 2008,
      duration: '2h 32m',
      director: 'Christopher Nolan',
      cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      featured: true
    },
    {
      id: 3,
      title: 'Interstellar',
      genre: 'Sci-Fi',
      rating: 4.7,
      releaseYear: 2014,
      duration: '2h 49m',
      director: 'Christopher Nolan',
      cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      imageUrl: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      title: 'Dune',
      genre: 'Sci-Fi',
      rating: 4.6,
      releaseYear: 2021,
      duration: '2h 35m',
      director: 'Denis Villeneuve',
      cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya'],
      description: 'Feature adaptation of Frank Herbert\'s science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.',
      imageUrl: 'https://i.pinimg.com/474x/1a/12/e4/1a12e43e9f2083ffca2174bdaeaa2968.jpg'
    },
    {
      id: 5,
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      rating: 4.9,
      releaseYear: 1994,
      duration: '2h 22m',
      director: 'Frank Darabont',
      cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      imageUrl: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      featured: true
    },
    {
      id: 6,
      title: 'Parasite',
      genre: 'Drama',
      rating: 4.8,
      releaseYear: 2019,
      duration: '2h 12m',
      director: 'Bong Joon Ho',
      cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
      description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
      imageUrl: 'https://images.unsplash.com/photo-1568111561564-08726a1563e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      title: 'The Godfather',
      genre: 'Crime',
      rating: 4.9,
      releaseYear: 1972,
      duration: '2h 55m',
      director: 'Francis Ford Coppola',
      cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      imageUrl: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 8,
      title: 'Pulp Fiction',
      genre: 'Crime',
      rating: 4.7,
      releaseYear: 1994,
      duration: '2h 34m',
      director: 'Quentin Tarantino',
      cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      imageUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]);
  
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  
  const genres = ['All', 'Action', 'Comedy', 'Crime', 'Drama', 'Sci-Fi', 'Horror'];
  
  useEffect(() => {
    if (selectedGenre === 'All') {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(movies.filter(movie => movie.genre === selectedGenre));
    }
  }, [selectedGenre, movies]);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">Discover Movies</h2>
      
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {genres.map(genre => (
          <button
            key={genre}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              selectedGenre === genre 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Featured Movies */}
      {selectedGenre === 'All' && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-700 border-b border-indigo-100 pb-2">Featured Films</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {movies.filter(movie => movie.featured).map(movie => (
              <div 
                key={movie.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 transition-transform"
                onClick={() => handleMovieClick(movie)}
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={movie.imageUrl} 
                    alt={movie.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2 text-indigo-900">{movie.title}</h3>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-600 text-sm">{movie.genre}</p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                      <span className="text-sm font-medium">{movie.rating}/5</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-3">{movie.releaseYear}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{movie.duration}</span>
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-2 mb-4">{movie.description}</p>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* All Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMovies.map(movie => (
          <div 
            key={movie.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            onClick={() => handleMovieClick(movie)}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={movie.imageUrl} 
                alt={movie.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1 text-indigo-900">{movie.title}</h3>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600 text-sm">{movie.genre}</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="text-sm font-medium">{movie.rating}/5</span>
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-xs mb-3">
                <Calendar className="h-3 w-3 mr-1" />
                <span className="mr-2">{movie.releaseYear}</span>
                <Clock className="h-3 w-3 mr-1" />
                <span>{movie.duration}</span>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 rounded-md text-sm transition-colors duration-300">
                Book Tickets
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Movie Detail Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedMovie.imageUrl} 
                alt={selectedMovie.title} 
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-indigo-900">{selectedMovie.title}</h2>
                <div className="flex items-center bg-indigo-100 px-3 py-1 rounded-full">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="font-bold">{selectedMovie.rating}/5</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-5 w-5 mr-1 text-indigo-600" />
                  <span>{selectedMovie.releaseYear}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-1 text-indigo-600" />
                  <span>{selectedMovie.duration}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <ThumbsUp className="h-5 w-5 mr-1 text-indigo-600" />
                  <span>{selectedMovie.genre}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-indigo-600" />
                  Director
                </h3>
                <p className="text-gray-800">{selectedMovie.director}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Cast</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMovie.cast.map((actor, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-800">
                      {actor}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Synopsis</h3>
                <p className="text-gray-800 leading-relaxed">{selectedMovie.description}</p>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition-colors duration-300 font-medium">
                  Book Tickets
                </button>
                <button className="px-4 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="px-4 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Suggestions;