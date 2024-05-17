/*
  Warnings:

  - You are about to drop the `Ciudadano` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pregunta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Respuesta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Respuesta" DROP CONSTRAINT "Respuesta_ciudadanoId_fkey";

-- DropForeignKey
ALTER TABLE "Respuesta" DROP CONSTRAINT "Respuesta_preguntaId_fkey";

-- DropTable
DROP TABLE "Ciudadano";

-- DropTable
DROP TABLE "Pregunta";

-- DropTable
DROP TABLE "Respuesta";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "Tutor" (
    "id" SERIAL NOT NULL,
    "identificacion" TEXT NOT NULL,
    "nombre" TEXT,
    "experticia" TEXT,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Tutor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tutorado" (
    "id" SERIAL NOT NULL,
    "identificacion" TEXT NOT NULL,
    "nombre" TEXT,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Tutorado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tutoria" (
    "id" SERIAL NOT NULL,
    "asignatura" TEXT,
    "horas" TEXT,
    "fecha" TEXT,
    "hora" TEXT,
    "tutorID" INTEGER NOT NULL,
    "tutoradoID" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Tutoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_identificacion_key" ON "Tutor"("identificacion");

-- CreateIndex
CREATE UNIQUE INDEX "Tutorado_identificacion_key" ON "Tutorado"("identificacion");

-- AddForeignKey
ALTER TABLE "Tutoria" ADD CONSTRAINT "Tutoria_tutorID_fkey" FOREIGN KEY ("tutorID") REFERENCES "Tutor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tutoria" ADD CONSTRAINT "Tutoria_tutoradoID_fkey" FOREIGN KEY ("tutoradoID") REFERENCES "Tutorado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
