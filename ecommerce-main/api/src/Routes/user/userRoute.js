const express = require("express");
const { login, register } = require("../../Controllers/user/userController");
const {
  addAddress,
  getAddress,
} = require("../../Controllers/user/addressController");
const { orders, addOrder, getOrderById } = require("../../Controllers/user/ordersController");

const router = express.Router();

//auth routes for user
router.post("/register", register);
router.post("/login", login);

//address routes for user
router.post("/add-address", addAddress);
router.get("/get-address/:id", getAddress);

router.post("/payment/orders", orders);
router.post("/payment/success", addOrder);
router.get("/get-order/:id", getOrderById);

module.exports = router;
