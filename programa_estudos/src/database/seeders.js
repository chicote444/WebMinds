import Database from './configDB.js';
import fs from "fs";

async function up() {
  const data = JSON.parse(fs.readFileSync("programa_estudos/src/database/users.json", "utf-8"));
  const data2 = JSON.parse(fs.readFileSync("programa_estudos/src/database/program.json", "utf-8"));
  const db = await Database.connect();

  const insertSql = `
    INSERT INTO useres (name, age)
    VALUES (?, ?)
  `;

  for (const student of data) {
    await db.run(insertSql, [student.name, student.idade]);
    console.log(student.name);
  }

  const insertsql2 = `
    INSERT INTO semana (dia, materia, assunto, assunto2, assunto3, semana, user_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  for (const semana of data2) {
    await db.run(insertsql2, [semana.dia, semana.materia, semana.assuntos[0], semana.assuntos[1], semana.assuntos[2], semana.semana, semana.user_id]);
    console.log(semana.user_id);
  }

  
  console.log('Seeding completed.');

}

up().catch(err => {
  console.error('Seeding failed:', err);
});

export default { up };