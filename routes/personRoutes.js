const express = require("express");
const router = express.Router();
const Person = require("../Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("svae data to the server");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal error found" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data is fatched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "internal error in finding data in person schema" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response is fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "iviled response" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error occured" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      res.status(404).json({ error: "Person Data is Not Found" });
    }
    console.log("Data is Updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server Error is occured here" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      res.status(404).json({ error: "Person Data is Not Found" });
    }
    console.log("Person is Deleted ");
    res.status(200).json({ message: "Person Data is Deleted Successfully " });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server Error is occured here" });
  }
});
module.exports = router;
