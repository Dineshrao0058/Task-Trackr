const trainerModel = require("../../admin/models/trainerModel");
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
//add trainer

exports.addTrainer = async (req, res) => {
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

      const trainerData = {
        trainerId: req.body.trainerId,
        name: req.body.name,
        role: req.body.role,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
        city: req.body.city,
        image: req.file.filename,
      };

      const trainer = new trainerModel(trainerData);
      await trainer.save();
      res.status(200).json(trainer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "failed to add trainer" });
    }
  });
};

// trainer view
exports.viewTrainer = async (req, res) => {
  try {
    const view = await trainerModel.find();
    res.status(200).json(view);
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal server Error");
  }
};


//trainer login

exports.trainerlogin = async (req, res) => {
  try {
    const trainer = await trainerModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!trainer) {
      return res.status(404).json("error");
    }
    const trainerPassKey = "task-tracker";
    const token = jwt.sign({ email: trainer.email }, trainerPassKey, {
      expiresIn: "2hr",
    });
    res.status(200).json({ trainer, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "no data found" });
  }
};


//update trainer
exports.updateTrainer = async (req, res) => {
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
      const trainerData = {
        trainerId: req.body.trainerId,
        name: req.body.name,
        role: req.body.role,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        city: req.body.city,
        image: req.file.filename,
      };
      const trainer = await trainerModel.findByIdAndUpdate(
        req.params.id,
        trainerData
      );
      res.status(200).json(trainer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "failed to update trainer" });
    }
  });
};

// delete trainer
exports.deleteTrainer = async (req, res) => {
  try {
    const trainer = await trainerModel.findByIdAndDelete(req.params.id);
    res.json(trainer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to delete the trainer" });
  }
};
