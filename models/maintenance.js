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
    type: Object,
  },
  nextMaintenanceDate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Maintenance", MaintenanceSchema);
