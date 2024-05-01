/* const { default: mongoose } = require("mongoose");

const connection = { isConnected: false };
export const connectTodb = async () => {
  try {
    if (connection.isConnected) {
      console.log("using the existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO);

    connection.isConnected = db.connection(0).readyState;
  } catch (error) {
    console.log(error);
    throw new Error("there is a new error");
  }
};
 */
const mongoose = require("mongoose");

const connection = { isConnected: false };

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using the existing connection");
      return;
    }

    await mongoose.connect(process.env.MONGO);

    connection.isConnected = mongoose.connection.readyState;
  } catch (error) {
    console.log(error);
    throw new Error("There is a new error");
  }
};
