import React, { useState } from 'react';
import { createBooking, Booking } from '../api/BookingApi';
import { toast } from 'sonner';

interface Movie {
  id: number;
  title: string;
  price: number;
}

const BuyForm: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);
  const [tickets, setTickets] = useState<number>(1);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const movies: Movie[] = [
    { id: 1, title: 'Inception', price: 12.99 },
    { id: 2, title: 'The Dark Knight', price: 13.99 },
    { id: 3, title: 'Interstellar', price: 14.99 },
    { id: 4, title: 'Dune', price: 15.99 },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedMovie || !date || !time || !email) {
      toast.error('Please fill in all fields');
      return;
    }

    const movie = movies.find(m => m.id === selectedMovie);
    if (!movie) return;

    const newBooking: Booking = {
      movie_name: movie.title,
      number_of_tickets: tickets,
      date,
      time,
      email,
    };

    try {
      await createBooking(newBooking);
      toast.success(`Booking confirmed!\nMovie: ${movie.title}\nTickets: ${tickets}\nDate: ${date}\nTime: ${time}\nConfirmation sent to: ${email}`);
      
      // Reset form
      setSelectedMovie(null);
      setTickets(1);
      setDate('');
      setTime('');
      setEmail('');
    } catch (error) {
      console.error('Error creating booking:', error);
      toast.error('There was an error processing your booking. Please try again later.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Buy Tickets</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Movie</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedMovie || ''}
            onChange={(e) => setSelectedMovie(Number(e.target.value))}
            required
          >
            <option value="">Select a movie</option>
            {movies.map(movie => (
              <option key={movie.id} value={movie.id}>
                {movie.title} - ${movie.price.toFixed(2)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Tickets</label>
          <input 
            type="number" 
            min="1" 
            max="10"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={tickets}
            onChange={(e) => setTickets(Number(e.target.value))}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input 
            type="date" 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select a time</option>
            <option value="12:00:00">12:00 PM</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="For ticket confirmation"
            required
          />
        </div>
        
        <div className="pt-2">
          <button 
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Purchase Tickets
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyForm;