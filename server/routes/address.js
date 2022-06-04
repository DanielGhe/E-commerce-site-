const router = require("express").Router();
const Address = require("../models/address");
const User = require("../models/user");
const verifyToken = require("../middlewares/verify-token");
const axios = require("axios");

/* POST API - Crează adresă */
router.post("/addresses", verifyToken, async (req, res) => {
  try {
    let address = new Address();
    address.user = req.decoded._id;
    address.country = req.body.country;
    address.fullName = req.body.fullName;
    address.streetAddress = req.body.streetAddress;
    address.city = req.body.city;
    address.state = req.body.state;
    address.zipCode = req.body.zipCode;
    address.phoneNumber = req.body.phoneNumber;
    address.deliverInstructions = req.body.deliverInstructions;
    address.securityCode = req.body.securityCode;

    await address.save();
    res.json({
      success: true,
      message: "Adresă adăugată cu succes!"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

/* GET API - get toate adresele*/
router.get("/addresses", verifyToken, async (req, res) => {
  try {
    let addresses = await Address.find({ user: req.decoded._id });

    res.json({
      success: true,
      addresses: addresses
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

/* GET API - get țări */
router.get("/countries", async (req, res) => {
  try {
    let response = await axios.get("https://restcountries.eu/rest/v2/all");

    res.json(response.data);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

/* GET API - get o adresă */
router.get("/addresses/:id", verifyToken, async (req, res) => {
  try {
    let address = await Address.findOne({ _id: req.params.id });

    res.json({
      success: true,
      address: address
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

/* PUT API - update o adresă */
router.put("/addresses/:id", verifyToken, async (req, res) => {
  try {
    let foundAddress = await Address.findOne({
      user: req.decoded._id,
      _id: req.params.id
    });
    if (foundAddress) {
      if (req.body.country) foundAddress.country = req.body.country;
      if (req.body.fullName) foundAddress.fullName = req.body.fullName;
      if (req.body.streetAddress)
        foundAddress.streetAddress = req.body.streetAddress;
      if (req.body.city) foundAddress.city = req.body.city;
      if (req.body.state) foundAddress.state = req.body.state;
      if (req.body.zipCode) foundAddress.zipCode = req.body.zipCode;
      if (req.body.phoneNumber) foundAddress.phoneNumber = req.body.phoneNumber;
      if (req.body.deliverInstructions)
        foundAddress.deliverInstructions = req.body.deliverInstructions;
      if (req.body.securityCode)
        foundAddress.securityCode = req.body.securityCode;

      await foundAddress.save();

      res.json({
        success: true,
        message: "Adresă actualizată cu succes!"
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

/* DELETE API - șterge o adresă */
router.delete("/addresses/:id", verifyToken, async (req, res) => {
  try {
    let deletedAddress = await Address.remove({
      user: req.decoded._id,
      _id: req.params.id
    });

    if (deletedAddress) {
      res.json({
        success: true,
        message: "Adresa a fost ștearsă"
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

/* PUT API - seteaza default */
router.put("/addresses/set/default", verifyToken, async (req, res) => {
  try {
    const updatedAddressUser = await User.findOneAndUpdate(
      { _id: req.decoded._id },
      { $set: { address: req.body.id } }
    );
    if (updatedAddressUser) {
      res.json({
        success: true,
        message: "Adresă setată ca preferată"
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});
module.exports = router;
