const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentroutes');
const routineRoutes = require('./routes/routine')

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/routines', routineRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
