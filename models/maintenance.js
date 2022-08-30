const mongoose = require("mongoose");

const MaintenanceSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
  },
  datePerformed: {
    type: Date,
    default: Date.now(),
  },
  location: {
    name: String,
    address: String,
    postalCode: String,
    city: String,
    province: String,
    country: String,
  },
  nextMaintenanceDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Maintenance", MaintenanceSchema);
