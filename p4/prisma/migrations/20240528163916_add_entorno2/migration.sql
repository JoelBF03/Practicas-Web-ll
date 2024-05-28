-- DropIndex
DROP INDEX "Entorno_descripcion_key";

-- AlterTable
ALTER TABLE "Entorno" ALTER COLUMN "descripcion" DROP NOT NULL;
