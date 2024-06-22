const express = require("express");
const router = express.Router();
const MenuItem = require("../MenuItem");

router.post("/menuitem", async (req, res) => {
  try {
    const menuData = req.body;
    const newMenu = new MenuItem(menuData);
    const r = await newMenu.save();
    console.log("menu has been saved");
    res.status(201).json(r);
  } catch (errr) {
    console.log(errr);
    res.status(501).json({ error: "internal error in the menu server" });
  }
});
router.get("/menuitem", async (req, res) => {
  try {
    const menuData = await MenuItem.find();
    console.log("menu item is found here");
    res.status(201).json(menuData);
  } catch (errr) {
    console.log(errr);
    res.status(501).json({ error: "error occured in the menu server " });
  }
});
module.exports=router;
