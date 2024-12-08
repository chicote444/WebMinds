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

export async function existingEmail(email) {
  if(email) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}}


export async function getUser(id) {
  if(id) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } else {
    throw new Error('User not found');
  }
}


    







export default { exibirUser, getUser, criarUser, existingEmail };