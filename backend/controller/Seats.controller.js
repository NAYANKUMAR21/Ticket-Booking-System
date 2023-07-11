const SeatModel = require('../model/Seats.model');
const SeatsToBeBooked = async (req, res) => {
  const { num } = req.params;
  let numOfSeats = Number(num);

  console.log(typeof numOfSeats);

  if (numOfSeats > 7) {
    return res.status(404).send({ message: 'Enter Number Below 7' });
  }
  try {
    const getData = await SeatModel.findOneAndUpdate(
      { Seat_Number: num },
      { isBooked: true },
      { new: true }
    );

    return res.status(200).send(getData);
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
};
const DetaultSetting = async (req, res) => {
  try {
    const defaultSetting = await SeatModel.updateMany(
      {},
      { isBooked: false },
      { multi: true }
    );
    return res.status(200).send(defaultSetting);
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
};
const GetAllSeats = async (req, res) => {
  try {
    const getAllSeats = await SeatModel.find();
    return res.status(200).send(getAllSeats);
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
};
module.exports = { SeatsToBeBooked, DetaultSetting, GetAllSeats };
