/*
  Warnings:

  - You are about to drop the column `tutorID` on the `Entorno` table. All the data in the column will be lost.
  - You are about to drop the column `tutoradoID` on the `Entorno` table. All the data in the column will be lost.
  - You are about to drop the column `tutoriaID` on the `Entorno` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[descripcion]` on the table `Entorno` will be added. If there are existing duplicate values, this will fail.
  - Made the column `descripcion` on table `Entorno` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `entornoID` to the `Tutor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entornoID` to the `Tutorado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entornoID` to the `Tutoria` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Entorno" DROP CONSTRAINT "Entorno_tutorID_fkey";

-- DropForeignKey
ALTER TABLE "Entorno" DROP CONSTRAINT "Entorno_tutoradoID_fkey";

-- DropForeignKey
ALTER TABLE "Entorno" DROP CONSTRAINT "Entorno_tutoriaID_fkey";

-- AlterTable
ALTER TABLE "Entorno" DROP COLUMN "tutorID",
DROP COLUMN "tutoradoID",
DROP COLUMN "tutoriaID",
ALTER COLUMN "descripcion" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tutor" ADD COLUMN     "entornoID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tutorado" ADD COLUMN     "entornoID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tutoria" ADD COLUMN     "entornoID" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Entorno_descripcion_key" ON "Entorno"("descripcion");

-- AddForeignKey
ALTER TABLE "Tutor" ADD CONSTRAINT "Tutor_entornoID_fkey" FOREIGN KEY ("entornoID") REFERENCES "Entorno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tutorado" ADD CONSTRAINT "Tutorado_entornoID_fkey" FOREIGN KEY ("entornoID") REFERENCES "Entorno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tutoria" ADD CONSTRAINT "Tutoria_entornoID_fkey" FOREIGN KEY ("entornoID") REFERENCES "Entorno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;