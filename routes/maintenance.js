const express = require("express");
const router = express.Router();
const maintenanceController = require("./controllers/maintenance");

router.get("/", maintenanceController.getMaintenanceItems);
