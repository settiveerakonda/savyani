const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// Handle form submission
router.post("/contact", async (req, res) => {
    try {
        const { fullName, email, phone, message } = req.body;

        const newContact = new Contact({ fullName, email, phone, message });
        await newContact.save();

        res.status(201).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

module.exports = router;
