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

export async function getUser(filhoId) {
  const db = await Database.connect();
  const selectSql = `SELECT useres.* FROM useres
          JOIN semana ON useres.id = semana.user_id
          WHERE semana.id = ?`;
    const rel = await db.all(selectSql, [filhoId]);
    return rel;
}

async function getUserNamefromSemana(filhoId) {
  const db = await Database.connect();
  const selectSql = `
  SELECT s.dia, u.name
  FROM semana s
  INNER JOIN useres u ON s.user_id = u.id
  ORDER BY s.dia
`;;
    const rel = await db.all(selectSql);
    return rel;
}
    
async function getUserFromSemana(filhoId) {
  const db = await Database.connect();
  const selectSql = `SELECT useres.* FROM useres
          
          WHERE useres.id = ?`;
    const rel = await db.all(selectSql, [filhoId]);
    return rel;
}

async function insertUser( name, age ) {
  const db = await Database.connect();

  const insertSql = `
    INSERT INTO useres (name, age)
    VALUES (?, ?)
  `;

  await db.run(insertSql, [name, age]);
}

async function insertSemana( dia, materia, assunto, assunto2, assunto3, semana, user_id ) {
  const db = await Database.connect();

  const insertSql = `
    INSERT INTO semana (dia, materia, assunto, assunto2, assunto3, semana, user_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  await db.run(insertSql, [dia, materia, assunto, assunto2, assunto3, semana, user_id]);
}

getUserFromSemana(1);


export { exibirUser, exibirSemana, getUserFromSemana, insertUser, insertSemana, getUserNamefromSemana };

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