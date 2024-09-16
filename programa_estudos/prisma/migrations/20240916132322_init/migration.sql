-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "semana" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dia" INTEGER NOT NULL,
    "materia" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,
    "assunto2" TEXT NOT NULL,
    "assunto3" TEXT NOT NULL,
    "semana" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "semana_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
