import express from 'express';

const router = express.Router();

const routineArray = []

router.get('/all', (req, res) => {
    res.json(routineArray)
})

export default router;