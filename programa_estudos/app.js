const express = require('express');
const morgan = require('morgan');
const path = require('path');


const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/prog', (req, res) => {
    const programa = [    
        {

        "semana": [
                
                        {
                            "dia": 1,
                            "materia": "Matemática",
                            "assuntos": ["Fatorial", "Geometria", "Mediana"]

                        },
                        {
                            "dia": 2,
                            "materia": "Geografia",
                            "assuntos": ["Relevo", "Geopolítica", "Placas tectônicas"]

                        },
                        {
                            "dia": 3,
                            "materia": "Português",
                            "assuntos": ["Literatura", "Gramática", "Artigos"]

                        },
                        {
                            "dia": 4,
                            "materia": "Inglês",
                            "assuntos": ["gramática", "Verbo To Be", "Should/Must"]

                        }
                
            ]},
            { 
            "semana": [
                
                {
                    "dia": 1,
                    "materia": "Filosofia",
                    "assuntos": ["Sócrates", "Sofismo", "Schopenaumer"]

                },
                {
                    "dia": 2,
                    "materia": "Biologia",
                    "assuntos": ["Ecologia", "Genética", "Evolução"]

                },
                {
                    "dia": 3,
                    "materia": "Física",
                    "assuntos": ["Mecânica", "Eletricidade", "Óptica"]

                },
                {
                    "dia": 4,
                    "materia": "Sociologia",
                    "assuntos": ["Formas de Governo", "Maquiavel", "Desigualdades"]

                }

            ]},
            {
            "semana": [
                
                {
                    "dia": 1,
                    "materia": "História",
                    "assuntos": ["Revolução <br> Industrial", "História do <br> Brasil", "Iluminismo"]

                },
                {
                    "dia": 2,
                    "materia": "Química",
                    "assuntos": ["Reações", "Orgânica", "Inorgânica"]

                },
                {
                    "dia": 3,
                    "materia": "Informática <br> Básica",
                    "assuntos": ["Html", "Git", "Visual Studio"]

                },
                {
                    "dia": 4,
                    "materia": "Espanhol",
                    "assuntos": ["Gramática", "Artigos", "Interpretação <br> Textual"]

                }

            ]
        }] 
        res.json(programa)
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});