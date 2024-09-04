import Database from './database.js';
import fs from "fs";

async function up() {
  const data = JSON.parse(fs.readFileSync("src/database/seeders.json", "utf-8"));
  const db = await Database.connect();

  const insertSql = `
    INSERT INTO estudante (name, email, senha)
    VALUES (?, ?, ?)
  `;

  for (const student of data) {
    await db.run(insertSql, [student.name, student.email, student.senha]);
  }

  console.log('Seeding completed.');
}

up().catch(err => {
  console.error('Seeding failed:', err);
});

export default { up };