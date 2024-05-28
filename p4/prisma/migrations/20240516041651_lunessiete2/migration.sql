/*
  Warnings:

  - You are about to drop the column `cedula` on the `Ciudadano` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Ciudadano_cedula_key";

-- AlterTable
ALTER TABLE "Ciudadano" DROP COLUMN "cedula";
