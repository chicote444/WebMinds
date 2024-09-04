import Database from './database.js';
 
async function up() {
  const db = await Database.connect();
 
  const investmentsSql = `
    CREATE TABLE IF NOT EXISTS estudante (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(50) NOT NULL,
      email VARCHAR(90) NOT NULL,
      senha VARCHAR(20) NOT NULL
    )
  `;
 
  await db.run(investmentsSql);
}
 
export default { up };
 