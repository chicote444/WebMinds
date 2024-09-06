import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import  { users,programas } from './users.js'; 
//import { exibirsemana, exibirdia, exibiruser, inseriruser, criardia, exibirusers } from './database.js';


const app = express();

app.use(express.json());

app.use(morgan('tiny'));

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Rota funcionando com Sucesso!</h1>')
})

/*app.get('/useres', async (req, res) => {
    const user = await exibirusers();
    res.send(user);
});

app.get('/useres/:id', async (req, res) => {
    const id = req.params.id;
    const user = await exibiruser(id);
    res.send(user);
});

app.post('/useres', async (req, res) => {

    const newUser = {
        name: 'jaca',
        idade: 2
    }
    const result = await inseriruser(newUser.name, newUser.idade);
    res.send(result);
});*/

app.post('/users', (req, res) => {
        let y = 2;
        const user = users[0];
        const newUser = { ...user, id: users[5].id + users.length, name: users[y+1].name, idade: 18};

        if(user) {
            users.push(newUser);
            return res.json(newUser);
        }

        
     
});

app.get('/programas', (req, res) => {
    res.json(programas);
});

app.post('/programas', (req, res) => {
    const newSemana = {
        semana: [
        {
            "dia": 1,
            "materia": "Analise de dados",
            "assuntos": [
                "Sócrates",
                "Sofismo",
                "Schopenaumer"
            ]
        },
        {
            "dia": 2,
            "materia": "Redes",
            "assuntos": [
                "Ecologia",
                "Genética",
                "Evolução"
            ]
        },
        {
            "dia": 3,
            "materia": "SO",
            "assuntos": [
                "Mecânica",
                "Eletricidade",
                "Óptica"
            ]
        },
        {
            "dia": 4,
            "materia": "Banco de Dados",
            "assuntos": [
                "Formas de Governo",
                "Maquiavel",
                "Desigualdades"
            ]
        }]
    };
    const programa = programas[0];
    const newPrograma = { ...programa, semana: newSemana.semana };

    if(programa) {
        programas.push(newPrograma);
        return res.json(newPrograma);
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

app.delete('/users/:id', (req, res) => {
    const User = req.params.id;
    const index = users.findIndex(user => user.id == User);

    if (index !== -1) {
        users.splice(index, 1);
        return res.send('Usuário deletado com sucesso');

    } else {
        return res.status(404).send('Usuário não encontrado');
    }

});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});


app.listen(3000, () => console.log('Servidor rodando na porta 3000'));