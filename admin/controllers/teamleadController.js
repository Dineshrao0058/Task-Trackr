const teamleadModel = require("../../admin/models/teamleadModel");
const multer = require("multer");
const jwt = require("jsonwebtoken")
const storage = multer.diskStorage({
  destination: "images/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const photoUpload = multer({ storage });
const upload = photoUpload.single("file");

exports.addTeamlead = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: "File upload failed" });
    }

    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const teamleadData = {
        name: req.body.name,
        role: req.body.role,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        city: req.body.city,
        image: req.file.filename,
      };

      const teamlead = new teamleadModel(teamleadData);
      await teamlead.save();

      return res.status(200).json(teamlead);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
};

// teamlead login
exports.teamleadlogin = async (req, res) => {
  try {
    const teamlead = await teamleadModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!teamlead) {
      return res.status(404).json("error");
    }
    const teamleadPassKey = "task";
    const token = jwt.sign({ email: teamlead.email }, teamleadPassKey, {
      expiresIn: "2hr",
    });
    res.status(200).json({ teamlead, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "no data found" });
  }
};


//updateTeamlead

exports.updateTeamlead = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: "File upload failed" });
    }

    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      const teamleadData = {
        name: req.body.name,
        role: req.body.role,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        city: req.body.city,
        image: req.file.filename,
        
      };

      const teamlead = await teamleadModel.findByIdAndUpdate(
        req.params.id,
        teamleadData
      );
      if (!teamlead) {
        return res.status(400).json({ error: "teamlead not found" });
      }
      res.status(200).json(teamlead);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "falied to update teamlead" });
    }
  });
};

//delete teamlead

exports.deleteTeamlead = async (req, res) => {
  try {
    const teamlead = await teamleadModel.findByIdAndDelete(req.params.id);
    res.json(teamlead);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to delete teamlead" });
  }
};
