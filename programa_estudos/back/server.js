import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import  { users } from './users.js';


const app = express();

app.use(express.json());

app.use(morgan('tiny'));

app.use(cors());

app.get('/', (red, res) => {
    res.send('<h1>Oi Chicão! <br> Você vai Conseguir amigão!!</h1>')
})


app.post('/users', (req, res) => {
    
        const user = users[0];
        const newUser = { ...user, id: users[5].id + users.length, name: 'cleber', idade: 18};

        if(user) {
            users.push(newUser);
            return res.json(newUser);
        }

        
     
});

app.get('/users', (req, res) => {
    const { name } = req.query;
    console.log(name);
    if (name) {
        const filteredUsers = users.filter(user => user.name.includes(name));
        return res.json(filteredUsers);
    }
    res.json(users);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));