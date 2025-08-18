const cursosPorCuatrimestre = [
    {
        nombre: "I CUATRIMESTRE",
        cursos: [
            { nombre: "UVMV011 - Zootecnia General I", estado: "pendiente" },
            { nombre: "UVMV012 - Química Inorgánica Básica", estado: "pendiente" },
            { nombre: "UVMV013 - Biología Celular y Molecular", estado: "pendiente" },
            { nombre: "UVMV014 - Bioestadística", estado: "pendiente" },
            { nombre: "UVMV015 - Seminario de Formación I", estado: "pendiente" }
        ]
    },
    {
        nombre: "II CUATRIMESTRE",
        cursos: [
            { nombre: "UVMV021 - Zootecnia General II", estado: "pendiente" },
            { nombre: "UVMV022 - Química Orgánica", estado: "pendiente" },
            { nombre: "UVMV023 - Anatomía Topográfica I", estado: "pendiente" },
            { nombre: "UVMV024 - Histología Veterinaria", estado: "pendiente" },
            { nombre: "UVMV025 - Seminario de Formación II", estado: "pendiente" }
        ]
    },
    {
        nombre: "III CUATRIMESTRE",
        cursos: [
            { nombre: "UVMV031 - Anatomía Topográfica y Comparada II", estado: "bloqueado" },
            { nombre: "UVMV032 - Bioquímica", estado: "bloqueado" },
            { nombre: "UVMV033 - Fisiología Animal General y Comparada I", estado: "bloqueado" },
            { nombre: "UVMV034 - Nutrición Animal", estado: "bloqueado" },
            { nombre: "UVMV035 - Seminario de Formación III", estado: "bloqueado" }
        ]
    },
    {
        nombre: "IV CUATRIMESTRE",
        cursos: [
            { nombre: "UVMV041 - Patología General I", estado: "bloqueado" },
            { nombre: "UVMV042 - Fisiología Animal", estado: "bloqueado" }
        ]
    },
    {
        nombre: "V CUATRIMESTRE",
        cursos: [
            { nombre: "UVMV051 - Patología Especial", estado: "bloqueado" },
            { nombre: "UVMV052 - Enfermedades", estado: "bloqueado" }
        ]
    },
    {
        nombre: "VI CUATRIMESTRE",
        cursos: [
            { nombre: "UVMV061 - Enfermedades de las Aves", estado: "completado" }
        ]
    }
];

function crearCuatrimestre(cuatrimestre) {
    const contenedor = document.createElement("div");
    contenedor.className = "cuatrimestre";

    const titulo = document.createElement("h3");
    titulo.textContent = cuatrimestre.nombre;
    contenedor.appendChild(titulo);

    cuatrimestre.cursos.forEach(curso => {
        const divCurso = document.createElement("div");
        divCurso.className = `curso ${curso.estado}`;
        divCurso.textContent = curso.nombre;
        contenedor.appendChild(divCurso);
    });

    return contenedor;
}

const filaSuperior = document.getElementById("fila-superior");
const filaInferior = document.getElementById("fila-inferior");

cursosPorCuatrimestre.forEach((cuatrimestre, index) => {
    const elemento = crearCuatrimestre(cuatrimestre);
    if (index < 6) {
        filaSuperior.appendChild(elemento);
    } else {
        filaInferior.appendChild(elemento);
    }
});
