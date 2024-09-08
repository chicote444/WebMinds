import { openDB } from "../configDB.js";
import { semana } from "../users.js";

export async function CreateTable() {
    openDB().then(db => {
        db.exec(`
            CREATE TABLE IF NOT EXISTS semanas (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                dia INTEGER,
                materia TEXT,
                assuntos TEXT,
                semana INTEGER
            )
        `);
    });
};

export async function InsertSemana() {
    openDB().then(db => {
        db.run(`
            INSERT INTO semanas (dia, materia, assuntos, semana)
            VALUES (?, ?, ?, ?)`, [semana[0].dia, semana[0].materia, semana[0].assuntos, semana[0].semana]);
    });
};

export async function ExibirSemanas() {
    openDB().then(db => {
        db.all(`
            SELECT * FROM semanas
        `);
    });
};

InsertSemana();

console.log(ExibirSemanas());
