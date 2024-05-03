-- CreateTable
CREATE TABLE "Tutor" (
    "id" SERIAL NOT NULL,
    "identificacion" TEXT NOT NULL,
    "nombre" TEXT,
    "experticia" TEXT,

    CONSTRAINT "Tutor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tutorado" (
    "id" SERIAL NOT NULL,
    "identificacion" INTEGER NOT NULL,
    "nombre" TEXT,

    CONSTRAINT "Tutorado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tutoria" (
    "id" SERIAL NOT NULL,
    "asignatura" TEXT,
    "horas" TEXT,
    "fecha" TEXT,
    "hora" INTEGER NOT NULL,
    "tutorID" INTEGER NOT NULL,
    "tutoradoID" INTEGER NOT NULL,

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
