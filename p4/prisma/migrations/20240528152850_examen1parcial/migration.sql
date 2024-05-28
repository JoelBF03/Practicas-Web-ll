-- CreateTable
CREATE TABLE "Entorno" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT,
    "tutorID" INTEGER NOT NULL,
    "tutoradoID" INTEGER NOT NULL,
    "tutoriaID" INTEGER NOT NULL,

    CONSTRAINT "Entorno_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Entorno" ADD CONSTRAINT "Entorno_tutorID_fkey" FOREIGN KEY ("tutorID") REFERENCES "Tutor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entorno" ADD CONSTRAINT "Entorno_tutoradoID_fkey" FOREIGN KEY ("tutoradoID") REFERENCES "Tutorado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entorno" ADD CONSTRAINT "Entorno_tutoriaID_fkey" FOREIGN KEY ("tutoriaID") REFERENCES "Tutoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
