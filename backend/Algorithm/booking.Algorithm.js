let SeatModel = require('../model/Seats.model');
let client = require('../Redis/redis.config');
async function BookingSeats(num) {
  let { matrix, data } = await generate2DMatrix();
  //   return console.log(matrix,"here");

  let firstIndex = -1;
  let SeatsAdded = false;
  for (let i = 0; i < 12; i++) {
    //main loop

    // for (let c = 0; c < matrix.length; c++) {
    //finding index of booked==false
    let flag = false;
    for (let d = 0; d < 7; d++) {
      if (matrix[i][d].isBooked === false) {
        firstIndex = d;
        flag = true;
        break;
      }
    }
    // if (flag) {
    //   break;
    // }
    // }

    // let x = matrix[i].includes({ isBooked: false });
    // let firstIndex = matrix[i].indexOf({ isBooked: false });
    console.log(firstIndex);
    if (firstIndex >= 0) {
      let zeroCount = 0;
      for (let j = firstIndex; j < 7; j++) {
        if (matrix[i][j].isBooked === false) {
          zeroCount++;
        }
      }
      console.log(firstIndex, zeroCount, 'here');
      let flag = false;

      if (num <= zeroCount) {
        let updatedSeats = [];
        let ContentToBeUpdate = [];
        for (let k = firstIndex; k < firstIndex + num; k++) {
          //   matrix[i][k] = 1;
          matrix[i][k].isBooked = true;
          ContentToBeUpdate.push(matrix[i][k]);
          updatedSeats.push(matrix[i][k]._id);
        }
        flag = true;
        if (flag) {
          console.log(updatedSeats);
          console.log(ContentToBeUpdate);
          SeatsAdded = true;
          for (let l = 0; l < updatedSeats.length; l++) {
            await SeatModel.findByIdAndUpdate(
              { _id: updatedSeats[l] },
              { ...ContentToBeUpdate[l] },
              { new: true }
            );
          }
          await client.set('latest', JSON.stringify(ContentToBeUpdate));
          return ContentToBeUpdate;
        }
      }
      console.log('here');
    }
  }
  if (SeatsAdded) {
  }
}
async function generate2DMatrix() {
  try {
    let data = await SeatModel.find();
    let row1 = data?.filter((item, index) => {
      if (item.row == 1) {
        return item;
      }
    });
    let row2 = data?.filter((item, index) => {
      if (item.row == 2) {
        return item;
      }
    });
    let row3 = data?.filter((item, index) => {
      if (item.row == 3) {
        return item;
      }
    });
    let row4 = data?.filter((item, index) => {
      if (item.row == 4) {
        return item;
      }
    });
    let row5 = data?.filter((item, index) => {
      if (item.row == 5) {
        return item;
      }
    });
    let row6 = data?.filter((item, index) => {
      if (item.row == 6) {
        return item;
      }
    });
    let row7 = data?.filter((item, index) => {
      if (item.row == 7) {
        return item;
      }
    });
    let row8 = data?.filter((item, index) => {
      if (item.row == 8) {
        return item;
      }
    });
    let row9 = data?.filter((item, index) => {
      if (item.row == 9) {
        return item;
      }
    });
    let row10 = data?.filter((item, index) => {
      if (item.row == 10) {
        return item;
      }
    });
    let row11 = data?.filter((item, index) => {
      if (item.row == 11) {
        return item;
      }
    });
    let row12 = data?.filter((item, index) => {
      if (item.row == 12) {
        return item;
      }
    });
    let matrix = [
      row1,
      row2,
      row3,
      row4,
      row5,
      row6,
      row7,
      row8,
      row9,
      row10,
      row11,
      row12,
    ];
    return { matrix: matrix, data: data };
  } catch (er) {
    return er.message;
  }
}
module.exports = BookingSeats;
