interface Tutor {
    ID_tutor: number;
    Nombre: string;
    Identificación: number;
    Experticia: string;
}

interface Tutorado {
    ID_tutorado: number;
    Nombre: string;
    Identificación: number;
}

interface Tutoria {
    ID_tutoria: number;
    Asignatura: string;
    Num_Horas: number;
    Fecha: string;
    Hora: string;
    tutor: Tutor;
    Tutorado: Tutorado;
}

const tutor = [
    {
        ID_tutor: 1,
        Nombre: "Juan Pueblo", 
        Identificación: 1315721447,
        Experticia: "Base de datos"
    },{
        ID_tutor: 2,
        Nombre: "Jose Delgado", 
        Identificación: 1363323548,
        Experticia: "Algebra Lineal"
    },{
        ID_tutor: 3,
        Nombre: "Damian Diaz", 
        Identificación: 1744653329,
        Experticia: "Estadistica"
    },{
        ID_tutor: 4,
        Nombre: "Pedro Ortiz", 
        Identificación: 1443436366,
        Experticia: "Ingenieria de Software"
    },{
        ID_tutor: 5,
        Nombre: "Kendry Paez", 
        Identificación: 1005575744,
        Experticia: "Calculo"
    }
]

const Tutorado = [
    {
        ID_tutorado: 1,
        Nombre: "Justin Paredes",
        Identificación: 1635352354
    },{
        ID_tutorado: 2,
        Nombre: "Anthony Saltos",
        Identificación: 1252453468
    },{
        ID_tutorado: 3,
        Nombre: "Danny Flores",
        Identificación: 1874635265
    },{
        ID_tutorado: 4,
        Nombre: "Josue Demera",
        Identificación: 1385625454
    },{
        ID_tutorado: 5,
        Nombre: "Diego Lucas",
        Identificación: 1726843653
    }
]

const Tutoria = [
    {
        ID_tutoria: 1,
        Asignatura: "Base de datos",
        Num_Horas: 2,
        Fecha: "Miercoles",
        Hora: "10:00 am",
        tutor:{
            ID_tutor: 1,
            Nombre: "Juan Pueblo", 
            Identificación: 1315721447,
            Experticia: "Base de datos"
        },
        Tutorado:{
            ID_tutorado: 3,
            Nombre: "Danny Flores",
            Identificación: 1874635265
        }
    },{
        ID_tutoria: 2,
        Asignatura: "Algebra Lineal",
        Num_Horas: 2,
        Fecha: "Jueves",
        Hora: "08:00 am",
        tutor:{
            ID_tutor: 2,
            Nombre: "Jose Delgado", 
            Identificación: 1363323548,
            Experticia: "Algebra Lineal"
        },
        Tutorado:{
            ID_tutorado: 1,
            Nombre: "Justin Paredes",
            Identificación: 1635352354
        }
    },{
        ID_tutoria: 3,
        Asignatura: "Estadistica",
        Num_Horas: 2,
        Fecha: "Lunes",
        Hora: "15:00 pm",
        tutor:{
            ID_tutor: 3,
            Nombre: "Damian Diaz", 
            Identificación: 1744653329,
            Experticia: "Estadistica"
        },
        Tutorado:{
            ID_tutorado: 2,
            Nombre: "Anthony Saltos",
            Identificación: 1252453468
        }
    },{
        ID_tutoria: 4,
        Asignatura: "Ingenieria de software",
        Num_Horas: 1,
        Fecha: "Viernes",
        Hora: "12:00 pm",
        tutor:{
            ID_tutor: 4,
            Nombre: "Pedro Ortiz", 
            Identificación: 1443436366,
            Experticia: "Ingenieria de Software"
        },
        Tutorado:{
            ID_tutorado: 1,
            Nombre: "Justin Paredes",
            Identificación: 1635352354
        }
    },{
        ID_tutoria: 5,
        Asignatura: "Algebra Lineal",
        Num_Horas: 2,
        Fecha: "Martes",
        Hora: "08:00 am",
        tutor:{
            ID_tutor: 2,
            Nombre: "Jose Delgado", 
            Identificación: 1363323548,
            Experticia: "Algebra Lineal"
        },
        Tutorado:{
            ID_tutorado: 4,
            Nombre: "Josue Demera",
            Identificación: 1385625454
        }
    }
]
console.log("Instruccion 2:");

console.log("HORARIO DE TUTORIAS | forEach")
Tutoria.forEach(t=> {
    console.log(`ID: ${t.ID_tutoria} | Asignatura: ${t.Asignatura} | #Horas: ${t.Num_Horas} | Fecha: ${t.Fecha} | Hora: ${t.Hora} | Tutor: ${t.tutor.Nombre} | Tutorado: ${t.Tutorado.Nombre}`);
});

console.log("\nTUTORES | for in")
for(const index in tutor) {
    const ftutor= tutor[index];
    console.log(`ID: ${ftutor.ID_tutor} | Identificación: ${ftutor.Identificación} | Nombre: ${ftutor.Nombre} | Experticia: ${ftutor.Experticia}`);
}

console.log("\nTUTORADOS | for of")
for(const ftutorados of Tutorado) {
    console.log(`ID: ${ftutorados.ID_tutorado} | Identificacion: ${ftutorados.Identificación} | Nombre: ${ftutorados.Nombre}`);
}

console.log("-------------------------------------------")
console.log("Instrucción 3:");

function buscarTutoriaPorID(id: number, callback: (tutoriaEncontrada: Tutoria | null) => void) {
    const tutoriaEncontrada = Tutoria.find((t: Tutoria) => t.ID_tutoria === id);
    
    callback(tutoriaEncontrada || null);
}

buscarTutoriaPorID(2, (tutoriaEncontrada) => {
    if (tutoriaEncontrada) {
        console.log("Tutoría encontrada:");
        console.log(tutoriaEncontrada);
    } else {
        console.log("Tutoría no encontrada con el ID especificado.");
    }
});
console.log("-------------------------------------------")

console.log("Instrucción 4:");
console.log("usando promises");

interface IUsuario {
    name: {
        first: string;
        last: string;
    };
    email: string;
}


function obtenerUsuariosAleatorios(): Promise<IUsuario[]> {
    return fetch('https://randomuser.me/api/?results')
    .then(response => response.json())
    .then(json => json as IUsuario[])
    .catch(error => {console.error('Error', error); return []})
}

obtenerUsuariosAleatorios().then(posts =>console.log(posts));

console.log("usando async/await");

interface IUsuario2 {
    name: {
        first: string;
        last: string;
    };
    email: string;
}

async function obtenerUsuariosAleatorios2(cantidad: number): Promise<IUsuario2[]> {
    const response = await fetch('https://randomuser.me/api/?results');
    return await response.json();
}

(async ()=> {
    const data = await obtenerUsuariosAleatorios2(5);
    console.log(data);
})();