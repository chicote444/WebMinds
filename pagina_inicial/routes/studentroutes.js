const express = require('express');
const router = express.Router();
const students = require('../data/students');

// Get all students
router.get('/', (req, res) => {
    res.json(students);
});

// Add a new student
router.post('/', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json(newStudent);
});

module.exports = router;
