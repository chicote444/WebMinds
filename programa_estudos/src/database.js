import mysql from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export async function exibirsemana() {
    const [rows] = await pool.query('SELECT * FROM semana2')
    return rows;
}

export async function exibirdia(dia) {
    const [rows] = await pool.query(`
        SELECT * FROM semana2 
        WHERE dia = ?
        `, [dia]);
    return rows[0];
}

export async function criardia(dia, materia) {
    const result = await pool.query(`
        INSERT INTO semana (dia, materia)
        VALUES (?, ?)
        `, [dia, materia]);
    return result;
}

export async function exibirusers() {
    const [rows] = await pool.query('SELECT * FROM users')
    return rows;
}

export async function exibiruser(id) {
    const [rows] = await pool.query(`
        SELECT * FROM users
        WHERE id = ?
        `, [id]);
    return rows[0];
}

export async function inseriruser(nome, idade) {
        const result = await pool.query(`
            INSERT INTO users (nome, idade)
            VALUES (?, ?)
            `, [nome, idade]);
        return result;
    }

const result = await criardia(5, 'Física');
console.log(result);