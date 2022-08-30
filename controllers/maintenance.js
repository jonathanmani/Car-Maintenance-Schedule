const Maintenance = require("../models/maintenance");

module.exports = {
  getMaintenance: async (req, res) => {
    console.log(req.user);
    try {
      const maintenanceItems = await Maintenance.find({ userId: req.user.id });
      res.render("maintenance.ejs", {
        items: maintenanceItems,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createMaintenance: async (req, res) => {
    try {
      await Maintenance.create({
        serviceType: req.body.serviceType,
        datePerformed: req.body.datePerformed,
        location: req.body.location,
        nextDate: req.body,
        status: req.body.status,
        userId: req.user.id,
      });
      console.log("Maintenance Item Created");
      res.redirect("/maintenance");
    } catch (err) {
      console.log(err);
    }
  },
  changeMaintence: async (req, res) => {
    try {
      await Maintenance.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          serviceType: req.body.serviceType,
          datePerformed: req.body.datePerformed,
          location: req.body.location,
          nextDate: req.body,
          status: req.body.status,
          userId: req.user.id,
        }
        console.log('Maintenance Updated')
        res.json('Maintenance Updated')
      );
    } catch (err) {
      console.log(err);
    }
  },
  deleteMaintenance: async (req, res) => {
    console.log(req.body.todoIdFromJSFile)
    try {
      await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
      console.log('Deleted Maintenance')
      res.json('Deleted Maintenance')
    } catch (err) {
      console.log(err)
    }
  }
};
