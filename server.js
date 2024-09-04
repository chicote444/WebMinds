import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import studentRoutes from './src/routes/studentroutes.js';
import routineRoutes from './src/routes/routine.js';

const PORT = 3000;
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/routines', routineRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
