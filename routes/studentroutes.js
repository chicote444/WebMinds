const express = require('express');
const router = express.Router();
const students = require('../data/student');

// Get all students
router.get('/', (req, res) => {
    res.json(students);
});

// Add a new student
router.post('/', (req, res) => {
    const newStudent = req.body;
    const id= students.length +2
    const student = {id, ...newStudent};

    students.push(student);
    res.status(201).json(newStudent);
});

module.exports = router;
