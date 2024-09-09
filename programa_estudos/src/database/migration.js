import Database from './configDB.js';
 
async function up() {
  const db = await Database.connect();
 
  const UserSql = `   
            CREATE TABLE IF NOT EXISTS useres (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                age INTEGER NOT NULL
                
            )`;
  
  const semanasql = `
            CREATE TABLE IF NOT EXISTS semana (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                dia INTEGER NOT NULL,
                materia TEXT NOT NULL,
                assunto TEXT,
                assunto2 TEXT,
                assunto3 TEXT,
                semana INTEGER NOT NULL,
                user_id INTEGER,
                FOREIGN KEY (user_id) REFERENCES useres(id)
            )`
  await db.run('PRAGMA foreign_keys = ON;');
  await db.run(UserSql);
  await db.run(semanasql)
}
 
export default { up };