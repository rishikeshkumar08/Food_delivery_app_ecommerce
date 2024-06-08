const addressModel = require("../../Models/user/addressModel");
const userModel = require("../../Models/user/userModel");
const { errorResponse, successResponse } = require("../../Response/response");

const addAddress = async (req, res) => {
  try {
    console.log(req.body);

    const { id } = req.body;

    const address = await new addressModel(req.body).save();
    if (address) {
      await userModel.findOneAndUpdate(
        { _id: id },
        { $push: { address: address._id } }
      );
    }
    if (address.length!==0) {
      successResponse(res, "Successfully added", address, 200);
    } else {
      errorResponse(res, "AddressError", "Unable to add address", 400);
    }
  } catch (err) {
    errorResponse(res, err.name, err.message, 400);
  }
};

const getAddress = async (req, res) => {
  try {
    const address = await addressModel.find({uId: req.params.id});
    // console.log(address)
    if(address.length!==0){
        successResponse(res, "Successfully fetched", address, 200);
    }
    else errorResponse(res, "AddressError", "Unable to get address", 400);
  } catch (err) {
    errorResponse(res, err.name, err.message, 400);
  }
};

module.exports = {
  addAddress,
  getAddress
};
