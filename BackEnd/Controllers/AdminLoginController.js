const mongoose = require('mongoose');
const adminLoginModel = require('../Models/AdminLoginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'NOTESAPI:';

const adminSignUp = async (req, res) => {
    // Existing admin check
    // Hashed password
    // Admin creation
    // Token generation

    const { adminName, password, adminEmail } = req.body;

    try {
        const existingAdmin = await adminLoginModel.findOne({ adminEmail: adminEmail });

        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await adminLoginModel.create({
            adminName: adminName,
            password: hashedPassword,
            adminEmail: adminEmail
        });

        // Token generation
        const token = jwt.sign({ adminEmail: result.adminEmail, id: result._id }, SECRET_KEY);

        res.status(201).json({ admin: result, token: token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};

const adminSignIn = async (req, res) => {
    const { adminEmail, password } = req.body;

    try {
        const existingAdmin = await adminLoginModel.findOne({ adminEmail: adminEmail });

        if (!existingAdmin) {
            return res.status(404).json({ message: "Admin Not Found." });
        }

        const matchPassword = await bcrypt.compare(password, existingAdmin.password);

        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // Token generation
        const token = jwt.sign({ adminEmail: existingAdmin.adminEmail, id: existingAdmin._id }, SECRET_KEY);

        res.status(201).json({ admin: existingAdmin, token: token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};
const getAdminId = async (req, res) => {
    console.log(req.adminId);
    try {
        const admin = await adminLoginModel.find({});
        res.status(200).json(admin);
    } catch (err) {
        res.status(400).json({ Error: err.message })
    }
    
};


const createNewAdmin = async (req, res) => {
    try {
    console.log(req.adminId)
    const { adminEmail, password, adminName } = req.body;

    // // Check if required fields are present in the request body
    // if (!adminEmail || !password || !adminName) {
    //     return res.status(400).json({ Error: "Please provide all required fields." });
    // }

    const newAdmin = new adminLoginModel({
        adminName: adminName,
        password: password,
        adminEmail: adminEmail,
        adminId: req.adminId
    });

   
        await newAdmin.save();
        res.status(200).json(newAdmin);

    } catch (err) {
        console.error(err);
        res.status(400).json({ Error: err.message });
    }
};

module.exports = { adminSignUp, adminSignIn, getAdminId, createNewAdmin }