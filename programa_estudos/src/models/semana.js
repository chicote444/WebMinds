import prisma from '../database/configDB.js';

async function exibirSemana() {
    const semana = await prisma.semana.findMany();
    return semana;
    }

async function exibirSemanaUser() {
    const semana = await prisma.semana.findMany({
        include: {
            user: true,
        },
    });
    return semana;
    }

export default { exibirSemana, exibirSemanaUser };