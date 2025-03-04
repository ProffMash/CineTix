import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/booking/';

export interface Booking {
    booking_id?: number;
    movie_name: string;
    number_of_tickets: number;
    date: string; // Use string to represent date in 'YYYY-MM-DD' format
    time: string; // Use string to represent time in 'HH:MM:SS' format
    email: string;
}

export const getBookings = async (): Promise<Booking[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getBookingById = async (id: number): Promise<Booking> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createBooking = async (booking: Booking): Promise<Booking> => {
    const response = await axios.post(API_URL, booking);
    return response.data;
};

export const updateBooking = async (id: number, booking: Booking): Promise<Booking> => {
    const response = await axios.put(`${API_URL}/${id}`, booking);
    return response.data;
};

export const deleteBooking = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};