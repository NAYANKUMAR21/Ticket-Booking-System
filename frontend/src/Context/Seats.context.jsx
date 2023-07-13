// MyContext.js
import { createContext, useState } from 'react';
import axios from 'axios';
export const SeatsContext = createContext();

const Backend_URL = process.env.REACT_APP_BACKEND_URL;
console.log(Backend_URL);

const SeatsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [bookedSeats, SetBookedSeats] = useState([]);
  const [isLoading, SetLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const getSeats = async () => {
    try {
      setErrorMessage('');
      SetLoading(true);

      const result = await axios.get(`${Backend_URL}/book-seats/get-all-seats`);

      let data = result.data.getAllSeats;
      SetBookedSeats(result.data.x ? result.data.x : []);
      SetLoading(false);
      setErrorMessage('');
      return setData(data);
    } catch (er) {
      SetLoading(false);
      setErrorMessage('');
      return console.log(er.message);
    }
  };
  const DefaultSetting = async () => {
    try {
      setErrorMessage('');
      await axios.patch(`${Backend_URL}/book-seats/default-Setting`);
      setErrorMessage('');
      return getSeats();
    } catch (er) {
      setErrorMessage('');
      SetLoading(false);
      return console.log(er.message);
    }
  };
  const patchNumOfSeats = async (num) => {
    try {
      SetLoading(true);
      setErrorMessage('');
      let y = await axios.post(`${Backend_URL}/book-seats/${num}`);
      SetBookedSeats(y.data.bookedSeats);
      SetLoading(false);
      setErrorMessage('');
      return getSeats();
    } catch (er) {
      SetLoading(false);
      setErrorMessage(er.response.data);
      return console.log(er.message, er.response.data);
    }
  };
  const UnBookSeat = async (id, isBooked) => {
    if (!isBooked) {
      setErrorMessage('Seat is Not Reserved');
    }
    try {
      setErrorMessage('');
      SetLoading(true);
      const result = await axios.patch(`${Backend_URL}/ubn-book-seats/${id}`);
      SetLoading(false);
      setErrorMessage('');
      return getSeats();
    } catch (er) {
      setErrorMessage('');
      SetLoading(false);
      return console.log(er.message);
    }
  };
  return (
    <SeatsContext.Provider
      value={{
        data,
        setData,
        getSeats,
        DefaultSetting,
        patchNumOfSeats,
        bookedSeats,
        isLoading,
        errorMessage,
        UnBookSeat,
      }}
    >
      {children}
    </SeatsContext.Provider>
  );
};

export default SeatsContextProvider;
