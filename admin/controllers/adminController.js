const adminModel = require("../../admin/models/adminModel");
const jwt = require("jsonwebtoken");

//admin add
exports.addAdmin = async (req, res) => {
  try {
    const admin = new adminModel(req.body);
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json("failed to add admin");
  }
};

//admin login
exports.adminlogin = async (req, res) => {
  try {
    const admin = await adminModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!admin) {
      return res.status(404).json("error");
    }
    const passKey = "task-tracker";
    const token = jwt.sign({ email: admin.email }, passKey, {
      expiresIn: "2hr",
    });
    res.status(200).json({ admin, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "no data found" });
  }
};

//admin Update
exports.adminUpdate = async (req, res) => {
  try {
    const admin = await adminModel.findByIdAndUpdate(req.params.id, req.body);
    res.json(admin);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "falied to update admin" });
  }
};
