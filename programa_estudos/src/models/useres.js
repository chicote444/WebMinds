import bcrypt from 'bcrypt';
import prisma from '../database/configDB.js';

const saltRounds = Number(process.env.BCRYPT_SALT);

async function criarUser({ name, email, password }) {
  if (name && email && password) {
    const hash = await bcrypt.hash(password, saltRounds);

    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hash,
      },
    });
    return createdUser;
  } else {
    throw new Error('Unable to create User');
  }
}

async function exibirUser(where) {
  const db = await prisma.user.findMany({
    where,
  });
  if (db.length === 1 && where) {
    return db[0];
  }
  return db;
  }

    


async function exibirSemana() {
  const db = await prisma.semana.findMany();

    const selectSql = `
        SELECT * FROM semana
    `;

    const semana = await db.all(selectSql);
    return semana;

}

export async function getUser(filhoId) {
  const db = await prisma.user.findMany();
  const selectSql = `SELECT useres.* FROM useres
          JOIN semana ON useres.id = semana.user_id
          WHERE semana.id = ?`;
    const rel = await db.all(selectSql, [filhoId]);
    return rel;
}

async function getUserNamefromSemana() {
  const db = await Database.connect();
  const selectSql = `
  SELECT *
  FROM semana s
  INNER JOIN useres u ON u.id = s.user_id
  
`;
    const rel = await db.all(selectSql);
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



export default { exibirUser, exibirSemana, insertUser, insertSemana, getUserNamefromSemana, criarUser };

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