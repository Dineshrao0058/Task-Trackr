const studentModel = require("../model/studentModel");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const storage = multer.diskStorage({
    destination:"photo/",
    filename:(req, file, cb)=>{
        cb(null,file.originalname)
    }
});
const photoUpload = multer({storage,limits:{fileSize:1000000}});
const upload = photoUpload.single("file");
exports.addStudent = async(req, res)=>{
    upload(req, res, async (error)=>{
        if (error) {
            return res.status(500).json({error:"Failed to Upload Photoo"});
        }
        try {
            if (!req.file) {
                return res.status(400).json({error:"no file has uploaded"})
            }
            const studentData = {
              name:req.body.name,
              email:req.body.email,
              password:req.body.password,
              course:req.body.course,
              photo:req.file.filename,  
            };
            const student = new studentModel(studentData);
            await student.save();
            return res.status(200).json(student);
        } catch (error) {
            console.log(error);
           return res.status(500).json({error:"server error"})
        }
    })
    
};
exports.studentLogin = async (req, res) => {
    try {
        const student = await studentModel.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if (!student) {
            return res.status(404).json("student not found");
        }
        const JWT_SECRET = "my_secretkey";
        const token = jwt.sign({ email: student.email }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ student, token })
    } catch (error) {
        console.log(error);
        res.status(500).json("failed to login student");
    }
};
exports.getStudent = async (req,res)=>{
    try {
        const studentList = await studentModel.find();
        res.status(201).json(studentList)
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"failed to get students"})
    }
};
exports.updateStudent = async(req, res)=>{
    upload(req, res, async (error)=>{
        if (error) {
            return res.status(500).json({error:"failed to upload photo"});
        }
        try {
            if (!req.file) {
                return res.status(400).json({error:"no file uploaded"})
            }
            const studentDataa = {
              name:req.body.name,
              email:req.body.email,
              password:req.body.password,
              course:req.body.course,
              photo:req.file.filename,  
            };
            const student =await studentModel.findByIdAndUpdate(req.params.id,studentDataa);
            if (!student) {
                return res.status(404).json({ error: "student not found" });
            }
            return res.status(200).json( student);
        } catch (error) {
            console.log(error);
           return res.status(500).json({error:"server error"})
        }
    })
    
};
exports.deleteStudent = async(req,res)=>{
    try {
        const studentdelete = await studentModel.findByIdAndDelete(req.params.id);
        res.status(200).json(studentdelete);
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"failed to delete student"})
    }
};