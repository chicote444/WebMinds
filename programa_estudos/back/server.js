import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import  { users } from './users.js';


const app = express();

app.use(express.json());

app.use(morgan('tiny'));

app.use(cors());

app.get('/', (red, res) => {
    res.send('<h1>Rota funcionando com Sucesso!</h1>')
})


app.post('/users', (req, res) => {
        let y = 2;
        const user = users[0];
        const newUser = { ...user, id: users[5].id + users.length, name: users[y+1].name, idade: 18};

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
        console.log(filteredUsers.name);
        return res.send(filteredUsers /* + "<h1>O USUÁRIO ATUAL É " +  name  + " PORRA </h1>"*/);
        
    }
    res.json(users);
});

app.delete('/users', (req, res) => {
    const user = users[0];


});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));