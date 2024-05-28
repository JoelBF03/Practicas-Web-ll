import server from 'express'
import { tutorRouter, tutoradoRouter, tutoriaRouter } from './routes' 

/* 
const app = server()

app.use(server.json())

app.use('/tutor', tutorRouter)
app.use('/tutorado', tutoradoRouter)
app.use('/tutoria', tutoriaRouter)
 


app.listen(3000, () => {
    console.log('Server on port 3000')
})

*/
import { PrismaClient } from '@prisma/client'
import { create } from 'domain';

const prisma = new PrismaClient()

async function createTutor() {
    try {
      const nuevoTutor = await prisma.tutoria.create({
        data: {
            ID_tutoria: 2,
            Asignatura: "Algebra Lineal",
            Num_Horas: 2,
            Fecha: "Jueves",
            Hora: "08:00 am",
            tutor:{
                tutorID: 2,
                Nombre: "Jose Delgado", 
                Identificación: 1363323548,
                Experticia: "Algebra Lineal"
            },
            Tutorado:{
                tutoradoID: 1,
                Nombre: "Justin Paredes",
                Identificación: 1635352354
            },
            entorno: {
                entornoID: 2,
                descripcion: "PRUEBAS"
            }
        },
      });
      console.log('Nuevo tutor creado:', nuevoTutor);
    } catch (error) {
      console.error('Error al crear el tutor:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  
  createTutor();


createTutor()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })