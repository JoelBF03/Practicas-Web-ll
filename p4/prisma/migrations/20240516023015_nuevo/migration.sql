/*
  Warnings:

  - You are about to drop the `Ciudadanoa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Preguntaa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Respuestaa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Respuestaa" DROP CONSTRAINT "Respuestaa_ciudadanoaId_fkey";

-- DropForeignKey
ALTER TABLE "Respuestaa" DROP CONSTRAINT "Respuestaa_preguntaaId_fkey";

-- DropTable
DROP TABLE "Ciudadanoa";

-- DropTable
DROP TABLE "Preguntaa";

-- DropTable
DROP TABLE "Respuestaa";

-- CreateTable
CREATE TABLE "Ciudadano" (
    "id" SERIAL NOT NULL,
    "cedula" TEXT NOT NULL,
    "nombre" TEXT,

    CONSTRAINT "Ciudadano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pregunta" (
    "id" SERIAL NOT NULL,
    "texto" TEXT,

    CONSTRAINT "Pregunta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Respuesta" (
    "id" SERIAL NOT NULL,
    "ciudadanoId" INTEGER NOT NULL,
    "preguntaId" INTEGER NOT NULL,
    "respuesta" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Respuesta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ciudadano_cedula_key" ON "Ciudadano"("cedula");

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_ciudadanoId_fkey" FOREIGN KEY ("ciudadanoId") REFERENCES "Ciudadano"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_preguntaId_fkey" FOREIGN KEY ("preguntaId") REFERENCES "Pregunta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
