import Database from "../database/database.js";

async function create({ name, email, senha }) {
  const db = await Database.connect();

  if (name && email && senha) {
    const sql = `
        INSERT INTO
          estudante (name, email, senha)
        VALUES
          (?, ?, ?)
      `;

    const { lastID } = await db.run(sql, [name, email, senha]);

    return await readById(lastID);
  } else {
    throw new Error("Unable to create estudante");
  }
}

async function readById(id) {
  const db = await Database.connect();

  if (id) {
    const sql = `
        SELECT
            *
          FROM
            estudante
          WHERE
            id = ?
        `;

    const investment = await db.get(sql, [id]);

    if (investment) {
      return investment;
    } else {
      throw new Error("estudante not found");
    }
  } else {
    throw new Error("Unable to find estudante");
  }
}

async function readAll() {
  const db = await Database.connect();

  const sql = `
        SELECT
            *
            FROM
            estudante
        `;

  return await db.all(sql);
}

export default { create, readById, readAll };