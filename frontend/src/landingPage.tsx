import React from 'react';
import { Film, Ticket, Clock, MapPin, Search, Calendar, Star, TrendingUp, Award } from 'lucide-react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import BuyForm from './components/bookForm';
import Suggestions from './components/suggestions';
import Contacts from './components/contactUs';

const LandingPage: React.FC = () => {
  // Initialize react-scroll
  React.useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart'
    });
  };

  // New movies data for the trending section
  const trendingMovies = [
    {
      id: 1,
      title: "Oppenheimer",
      imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.9,
      releaseDate: "July 21, 2023"
    },
    {
      id: 2,
      title: "Barbie",
      imageUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      releaseDate: "July 21, 2023"
    },
    {
      id: 3,
      title: "The Marvels",
      imageUrl: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      releaseDate: "November 10, 2023"
    }
  ];

  // Upcoming movies data
  const upcomingMovies = [
    {
      id: 1,
      title: "Dune: Part Two",
      director: "Denis Villeneuve",
      imageUrl: "https://i.pinimg.com/474x/1a/12/e4/1a12e43e9f2083ffca2174bdaeaa2968.jpg",
      releaseDate: "March 1, 2024"
    },
    {
      id: 2,
      title: "Gladiator II",
      director: "Ridley Scott",
      imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      releaseDate: "November 22, 2024"
    },
    {
      id: 3,
      title: "Furiosa: A Mad Max Saga",
      director: "George Miller",
      imageUrl: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      releaseDate: "May 24, 2024"
    },
    {
      id: 4,
      title: "Joker: Folie à Deux",
      director: "Todd Phillips",
      imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      releaseDate: "October 4, 2024"
    }
  ];

  // Award-winning movies
  const awardWinningMovies = [
    {
      id: 1,
      title: "Everything Everywhere All at Once",
      award: "Best Picture",
      imageUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      year: 2023
    },
    {
      id: 2,
      title: "Parasite",
      award: "Best Picture",
      imageUrl: "https://images.unsplash.com/photo-1568111561564-08726a1563e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      year: 2020
    },
    {
      id: 3,
      title: "Nomadland",
      award: "Best Picture",
      imageUrl: "https://i.pinimg.com/236x/2f/cf/c8/2fcfc8a3d4cc10e57b2ea59b9f78b290.jpg",
      year: 2021
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <header className="bg-indigo-800 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <Film className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold">CineTix</h1>
          </div>
          
          <nav className="flex space-x-6">
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              duration={800} 
              className="hover:text-indigo-200 transition-colors duration-200 cursor-pointer"
            >
              Home
            </Link>
            <Link 
              to="trending" 
              spy={true} 
              smooth={true} 
              duration={800} 
              className="hover:text-indigo-200 transition-colors duration-200 cursor-pointer"
            >
              Trends
            </Link>
            <Link 
              to="booking" 
              spy={true} 
              smooth={true} 
              duration={800} 
              className="hover:text-indigo-200 transition-colors duration-200 cursor-pointer"
            >
              Book
            </Link>
            <Link 
              to="discover" 
              spy={true} 
              smooth={true} 
              duration={800} 
              className="hover:text-indigo-200 transition-colors duration-200 cursor-pointer"
            >
              Discover
            </Link>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              duration={800} 
              className="hover:text-indigo-200 transition-colors duration-200 cursor-pointer"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Hero Section */}
      <Element name="home">
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">Book Your Movie Experience</h2>
              <p className="text-lg text-gray-700 mb-8">Get tickets for the latest blockbusters with just a few clicks</p>
              
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row">
                <div className="flex-1 mb-4 md:mb-0 md:mr-2">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search for movies..." 
                      className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="flex-1 mb-4 md:mb-0 md:mx-2">
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="">Select a theater</option>
                    <option value="1">CineTix Downtown</option>
                    <option value="2">CineTix Westside</option>
                    <option value="3">CineTix Mall</option>
                  </select>
                </div>
                <div className="flex-1 md:ml-2">
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
      
      {/* Trending Movies Section */}
      <Element name="trending">
        <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <TrendingUp className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold text-indigo-900">Trending Now</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trendingMovies.map(movie => (
                <div key={movie.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={movie.imageUrl} 
                      alt={movie.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-2 text-indigo-900">{movie.title}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-indigo-600 mr-1" />
                        <span className="text-sm text-gray-600">{movie.releaseDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                        <span className="text-sm font-medium">{movie.rating}/5</span>
                      </div>
                    </div>
                    <Link 
                      to="booking" 
                      spy={true} 
                      smooth={true} 
                      duration={800}
                    >
                      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-colors duration-300">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>
      
      {/* Upcoming Movies Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900">Coming Soon</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingMovies.map(movie => (
              <div key={movie.id} className="bg-gradient-to-br from-indigo-50 to-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={movie.imageUrl} 
                    alt={movie.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 text-indigo-900">{movie.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">Director: {movie.director}</p>
                  <div className="flex items-center text-indigo-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{movie.releaseDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Award-Winning Movies */}
      <section className="py-12 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Award className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-indigo-900">Award Winners</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awardWinningMovies.map(movie => (
              <div key={movie.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={movie.imageUrl} 
                    alt={movie.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="font-bold text-xl text-white">{movie.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-gray-800">{movie.award}</span>
                    </div>
                    <span className="text-sm text-gray-600">{movie.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 text-indigo-600">
                <Ticket className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Book your tickets in seconds with our streamlined process</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 text-indigo-600">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Get instant notifications about showtimes and seat availability</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 text-indigo-600">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Locations</h3>
              <p className="text-gray-600">Choose from various theaters across the city for your convenience</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Buy Form Section */}
      <Element name="booking">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <BuyForm />
          </div>
        </section>
      </Element>
      
      {/* Suggestions Section */}
      <Element name="discover">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Suggestions />
          </div>
        </section>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <Contacts />
          </div>
        </section>
      </Element>
      
      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">CineTix</h4>
              <p className="text-indigo-200">Your one-stop destination for movie tickets and entertainment.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-indigo-200 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-indigo-200 hover:text-white transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="text-indigo-200 hover:text-white transition-colors duration-200">FAQ</a></li>
                <li><a href="#" className="text-indigo-200 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Theaters</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-indigo-200 hover:text-white transition-colors duration-200">Downtown</a></li>
                <li><a href="#" className="text-indigo-200 hover:text-white transition-colors duration-200">Westside</a></li>
                <li><a href="#" className="text-indigo-200 hover:text-white transition-colors duration-200">Mall</a></li>
                <li><a href="#" className="text-indigo-200 hover:text-white transition-colors duration-200">All Locations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-200">Facebook</a>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-200">Twitter</a>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-200">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-300">
            <p>&copy; 2025 CineTix. All rights reserved.</p>
            <button 
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center text-indigo-200 hover:text-white transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;