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
  const getSeats = async () => {
    try {
      SetLoading(true);
      const result = await axios.get(`${Backend_URL}/book-seats/get-all-seats`);

      let data = result.data.getAllSeats;
      SetBookedSeats(result.data.x ? result.data.x : []);
      SetLoading(false);
      return setData(data);
    } catch (er) {
      return console.log(er.message);
    }
  };
  const DefaultSetting = async () => {
    try {
      await axios.patch(`${Backend_URL}/book-seats/default-Setting`);

      return getSeats();
    } catch (er) {
      return console.log(er.message);
    }
  };
  const patchNumOfSeats = async (num) => {
    try {
      SetLoading(true);
      let y = await axios.post(`${Backend_URL}/book-seats/${num}`);
      SetBookedSeats(y.data.bookedSeats);
      SetLoading(false);
      return getSeats();
    } catch (er) {
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
      }}
    >
      {children}
    </SeatsContext.Provider>
  );
};

export default SeatsContextProvider;
