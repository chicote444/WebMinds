const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


let users = [
  { id: 1, header: 'Historia', title: 'Prova', text: 'Era do gelo' },
  { id: 2, header: 'Geografia', title: 'Prova', text: 'Pangeia' },
  { id: 3, header: 'Artes', title: 'Prova', text: 'Cores' }
];

// Rota para obter todos os usuários
app.get('/api/users', (req, res) => {
  res.json(users);
});


app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});


app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    header: req.body.header,
    title: req.body.title,
    text: req.body.text
  };
  users.push(newUser);
  res.status(201).json(newUser);
});


app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).send('User not found');

  user.header = req.body.header;
  user.title = req.body.title;
  user.text = req.body.text;
  res.json(user);
});

// Rota para deletar um usuário
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) return res.status(404).send('User not found');

  users.splice(userIndex, 1);
  res.status(204).send();
});

// Porta em que o servidor vai rodar
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});