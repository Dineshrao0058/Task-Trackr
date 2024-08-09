const trainerModel = require("../../admin/models/trainerModel");
const multer = require("multer");

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
        name: req.body.name,
        role: req.body.role,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
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
