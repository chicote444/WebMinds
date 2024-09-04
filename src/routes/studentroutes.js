import express from 'express';
import estudantes from '../models/estudantes.js';

const router = express.Router();

// Get all students
router.get('/', async (req, res) => {
    const students = await estudantes.readAll()
    res.json(students);
});

// Add a new student
router.post('/', async (req, res) => {
    const { name, email ,senha } = req.body;
    const newStudent = await estudantes.create({ name, email, senha });
    
    res.status(201).json(newStudent);
});

export default router;
