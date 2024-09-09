import Database from '../database/configDB.js';

async function exibirUser(field, age) {
  const db = await Database.connect();
  
  if (field && age) {
    const selectSql = `
    SELECT id, name, age FROM useres WHERE ${field} = ?
  `;

  const user = await db.all(selectSql, [age]);

  return user;
  }

    const selectSql = `
        SELECT id, name, age FROM useres
    `;

    const user = await db.all(selectSql);

    return user;
}

async function exibirSemana() {
  const db = await Database.connect();

    const selectSql = `
        SELECT * FROM semana
    `;

    const semana = await db.all(selectSql);
    return semana;

}
    
async function getUserFromSemana(filhoId) {
  const db = await Database.connect();
  const selectSql = `SELECT useres.* FROM useres
          JOIN semana ON useres.id = semana.user_id
          WHERE semana.id = ?`;
    const rel = await db.all(selectSql, [filhoId]);
    return rel;
}

getUserFromSemana(1);


export { exibirUser, exibirSemana, getUserFromSemana };

/*async function criarUser({ name, age }) {
  const db = await Database.connect();


  if (name && age) {
    const insertSql = `
    INSERT INTO useres (name, age)
    VALUES (?, ?)
  `;
  }
  

  await db.run(insertSql, [name, age]);
}*/