import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { isAuthenticated } from './middleware/auth.js';
//import { exibirsemana, exibirdia, exibiruser, inseriruser, criardia, exibirusers } from './database.js';
import { /*exibirUser, exibirSemana, getUser, insertUser, insertSemana, getUserNamefromSemana*/ } from './models/useres.js';
import User from './models/useres.js';
import Semana from './models/semana.js';

class HTTPError extends Error {
    constructor(message, code) {
      super(message);
      this.code = code;
    }
  }

const app = express();

app.use(express.json());

app.use(morgan('tiny'));

app.use(cors());

app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
      preflightContinue: false,
    })
  );

app.post('/users/true', async (req, res) => {
    
    try {
        const user = req.body;
        const newUser = await User.criarUser(user);
        res.status(201).json(newUser);
      } catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuário' });
      }

});

app.get('/semana/mamama', isAuthenticated, async (req, res) => {
    const semana = await Semana.exibirSemana();
    res.json(semana);
});

app.get('/users/trues', isAuthenticated, async (req, res) => {
    const user = await User.exibirUser();
    res.json(user);
});
app.get('/users/ref', async (req, res) => {
    const { id } = req.query;
    const user = await getUserFromSemana(id);
    return res.json(user);
  });

app.get('/users/refe', isAuthenticated, async (req, res) => {
    const userId = req.userId;
    const user = await User.getUser(userId);
    delete user.password;
    return res.json(user);
    });

app.get('/users/refe2', isAuthenticated, async (req, res) => {
    const user = await Semana.exibirSemanaUser();
    return res.json(user);
    }
);


app.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log( req.body);
      const { id: userId, password: hash } = await User.exibirUser({ email });

      
      const match = await bcrypt.compare(password, hash);

      if (match) {
        const token = jwt.sign(
          { userId },
          process.env.JWT_SECRET,
          { expiresIn: 3600000 }, // 1h
          
        );
        const decoded = jwt.decode(token, { complete: true });
        return res.json({ auth: true, token, por:`Vai expirar em ${new Date(decoded.payload.exp * 1000)} segundos kkkkk` });
      } 
      
      else {
        throw new Error('User not found');
      }
    } catch (error) {
      res.status(401).json({ error: 'User not found.' });
    }
  });  


app.post('/semana', async (req, res) => {
    const newSemana = [{
        dia: 1,
        materia: 'Analise de dados',
        assunto: 'Sócrates',
        assunto2: 'Sofismo',
        assunto3: 'Schopenaumer',
        semana: 4,
        user_id: 1
    },
    {
        dia: 2,
        materia: 'Redes',
        assunto: 'Ecologia',
        assunto2: 'Genética',
        assunto3: 'Evolução',
        semana: 4,
        user_id: 1
    },
    {
        dia: 3,
        materia: 'SO',
        assunto: 'Mecânica',
        assunto2: 'Eletricidade',
        assunto3: 'Óptica',
        semana: 4,
        user_id: 1
    },
    {
        dia: 4,
        materia: 'Banco de Dados',
        assunto: 'Formas de Governo',
        assunto2: 'Maquiavel',
        assunto3: 'Desigualdades',
        semana: 4,
        user_id: 1
    }];
    const semana = await insertSemana(newSemana[0].dia, newSemana[0].materia, newSemana[0].assunto, newSemana[0].assunto2, newSemana[0].assunto3, newSemana[0].semana, newSemana[0].user_id);
    res.json(semana);
});


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


app.get('/semana', async (req, res) => {
    let semana;
    semana = await exibirSemana();
    return res.json(semana);
  });

app.get('/programas', async (req, res) => {
    const week = await InsertSemana(semana[0].dia, semana[0].materia, semana[0].assuntos, semana[0].semana);
    
    res.json(week);
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