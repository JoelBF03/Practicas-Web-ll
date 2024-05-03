import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

//-------------------------------------------------------INSTRUCCION 2------------------------------------------------------------

// Se define listas de nombres para tutores, tutorado, experticias y asignaturas
const nombresTutor = ['Juan Pueblo', 'Jose Delgado', 'Damian Diaz', 'Pedro Ortiz', 'Kendry Paez', 'Jhon Cifuente', 'Alex Arce', 'Luis Leon', 'Javier Burrai', 'Gustavo Plata'];
const nombresTutorado = ['Justin Paredes', 'Anthony Saltos', 'Danny Flores', 'Josue Demera', 'Diego Lucas', 'Anthony Lopez', 'Josue Garcia', 'Jeremy Delgado', 'Richard Mendoza', 'Joel Palma']
const experticias = ['Matemáticas', 'Inglés', 'Lenguaje', 'Sociales', 'Ciencias'];
const asignaturas = ['Matemáticas', 'Inglés', 'Lenguaje', 'Sociales', 'Ciencias'];

// Se declara una función para generar #cédula aleatorios
function generarCedulaAleatoria() {
    const numero = Math.floor(Math.random() * 10000000000);
    return numero.toString().padStart(10, '0');
}

// Se declara la funcion para LLENAR los datos de los tutores
async function llenarTutores() {
    for (let i = 0; i < 10; i++) { // Se inicializa una funcion FOR con 10 iteraciones
        const identificacion = generarCedulaAleatoria(); //Se asigna un #cedula aleatorio
        const nombre = nombresTutor[i]; // Se obtiene un nombre de la lista de nombresTutor
        const experticia = experticias[Math.floor(Math.random() * experticias.length)]; // Se asigna una experticia aleatoria

        // Se crea un nuevo tutor en la base de datos
        await prisma.tutor.create({
            data: {
                identificacion,
                nombre,
                experticia,
            },
        });
    }
    console.log("Tutores insertados correctamente");
}

// Funcion para llenar los datos de los tutorados
async function llenarTutorado() {
    for(let i = 0; i < 10; i++){
        const identificacion = generarCedulaAleatoria(); // Se genera un #cédula aleatorio
        const nombre = nombresTutorado[i]; // Se obtiene un nombre de la lista de nombresTutorados

        // Se crea un nuevo tutorado en la base de datos
        await prisma.tutorado.create({
            data: {
                identificacion,
                nombre,
            },
        });
    }
    console.log("Tutorados ingresados correctamente");
}

// Se declara una funcion para generar fechas aleatorias dentro de un rango de tiempo
function generarFechaAleatoria() {
    const inicio = new Date('2024-01-01').getTime();
    const fin = new Date('2024-04-30').getTime();
    const fechaAleatoria = new Date(inicio + Math.random() * (fin - inicio));
    return fechaAleatoria.toISOString().slice(0, 10);
}

// Función para llenar los datos de Tutorias
async function llenarTutorias() {
    const tutores = await prisma.tutor.findMany();
    const tutorados = await prisma.tutorado.findMany();

    for (let i = 0; i < 10; i++) {
        const asignatura = asignaturas[Math.floor(Math.random() * asignaturas.length)]; // Se selecciona una asignatura aleatoria de la lista asignaturas
        const horas = Math.floor(Math.random() * 3) + 1; // Genera un número aleatorio entre 1 y 3
        const fecha = generarFechaAleatoria(); // Se genera una fecha aleatoria
        const hora = Math.floor(Math.random() * 20); // Genera un número aleatorio entre 0 y 20

        // Se selecciona aleatoriamente un tutor y un tutorado
        const randomTutorIndex = Math.floor(Math.random() * tutores.length);
        const randomTutoradoIndex = Math.floor(Math.random() * tutorados.length);
        const tutorID = tutores[randomTutorIndex].id;
        const tutoradoID = tutorados[randomTutoradoIndex].id;

        // Se crea una nueva tutoria en la base de datos
        await prisma.tutoria.create({
            data: {
                asignatura,
                horas: horas.toString(),
                fecha,
                hora: hora.toString(),
                tutor: { connect: { id: tutorID } },
                tutorado: { connect: { id: tutoradoID } },
            },
        });
    }
    console.log("Horarios generados correctamente");
}

//--------------------------------------------INSTRUCCION 3--------------------------------------------------------------

// Funcion para BUSCAR una transacción mediante ID
async function BuscarPorId(transaccionID: number){
    const transaccion = await prisma.tutoria.findUnique({where: { id: transaccionID}, include: {tutor: true, tutorado: true},});
    if (transaccion) {
        console.log("Transacción encontrada:");
        console.log(transaccion);
    } else {
        console.log(`No se encontró ninguna transacción con el ID ${transaccionID}`);
    }
}

//---------------------------------------------INSTRUCCION 4----------------------------------------------------------------------

// Función para CONSULTAR todas las transacciones y sus datos relacionados
async function Consultar(){
    const consultar = await prisma.tutoria.findMany({include: {tutor: true, tutorado: true}})
    if (consultar.length > 0){
        console.log("Transacciones encontradas:");
        consultar.forEach((consultar) => {
            console.log("CONSULTA:");
            console.log(consultar);
            console.log("Tutor:");
            console.log(consultar.tutor);
            console.log("Tutorado:");
            console.log(consultar.tutorado);
            console.log("-----------------------------------");
        });
    }
}

async function main() {
    await llenarTutores();
    await llenarTutorado();
    await llenarTutorias();
    await BuscarPorId(25); // Llama a la funcion BuscarPorId con un ID de transaccion en específico
    await Consultar(); // Llama a la funcion Consultar para mostrar todas las transacciones y sus datos relacionados
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })