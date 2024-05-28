-- CreateTable
CREATE TABLE "Ciudadanoa" (
    "id" SERIAL NOT NULL,
    "cedula" TEXT NOT NULL,
    "nombre" TEXT,

    CONSTRAINT "Ciudadanoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preguntaa" (
    "id" SERIAL NOT NULL,
    "texto" TEXT,

    CONSTRAINT "Preguntaa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Respuestaa" (
    "id" SERIAL NOT NULL,
    "ciudadanoaId" INTEGER NOT NULL,
    "preguntaaId" INTEGER NOT NULL,
    "respuesta" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Respuestaa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ciudadanoa_cedula_key" ON "Ciudadanoa"("cedula");

-- AddForeignKey
ALTER TABLE "Respuestaa" ADD CONSTRAINT "Respuestaa_ciudadanoaId_fkey" FOREIGN KEY ("ciudadanoaId") REFERENCES "Ciudadanoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respuestaa" ADD CONSTRAINT "Respuestaa_preguntaaId_fkey" FOREIGN KEY ("preguntaaId") REFERENCES "Preguntaa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
