const cursosPorCuatrimestre = [
  {
    nombre: "I CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV011", nombre: "Introducción a la Medicina Veterinaria", estado: "pendiente" },
      { codigo: "UVMV012", nombre: "Biología General", estado: "pendiente" },
      { codigo: "UVMV013", nombre: "Química General", estado: "pendiente" },
      { codigo: "UVMV014", nombre: "Matemática", estado: "pendiente" },
      { codigo: "UVMV015", nombre: "Seminario de Formación I", estado: "pendiente" }
    ]
  },
  {
    nombre: "II CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV021", nombre: "Anatomía Topográfica y Comparada I", estado: "pendiente" },
      { codigo: "UVMV022", nombre: "Física General", estado: "pendiente" },
      { codigo: "UVMV023", nombre: "Microbiología", estado: "pendiente" },
      { codigo: "UVMV024", nombre: "Química Orgánica", estado: "pendiente" },
      { codigo: "UVMV025", nombre: "Seminario de Formación II", estado: "pendiente" }
    ]
  },
  {
    nombre: "III CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV031", nombre: "Anatomía Topográfica y Comparada II", estado: "pendiente" },
      { codigo: "UVMV032", nombre: "Bioquímica", estado: "pendiente" },
      { codigo: "UVMV033", nombre: "Fisiología Animal General y Comparada I", estado: "pendiente" },
      { codigo: "UVMV034", nombre: "Nutrición Animal", estado: "pendiente" },
      { codigo: "UVMV035", nombre: "Seminario de Formación III", estado: "pendiente" }
    ]
  },
  {
    nombre: "IV CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV041", nombre: "Patología General I", estado: "pendiente" },
      { codigo: "UVMV042", nombre: "Fisiología Animal", estado: "pendiente" }
    ]
  },
  {
    nombre: "V CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV051", nombre: "Patología Especial", estado: "pendiente" },
      { codigo: "UVMV052", nombre: "Enfermedades Parasitarias", estado: "pendiente" }
    ]
  },
  {
    nombre: "VI CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV061", nombre: "Enfermedades de las Aves", estado: "completado" }
    ]
  },
  {
    nombre: "VII CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV071", nombre: "Enfermedades de los Bovinos", estado: "pendiente" }
    ]
  },
  {
    nombre: "VIII CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV081", nombre: "Enfermedades de los Animales de Compañía", estado: "bloqueado" }
    ]
  },
  {
    nombre: "IX CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV091", nombre: "Cirugía General", estado: "bloqueado" }
    ]
  },
  {
    nombre: "X CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV101", nombre: "Farmacología Veterinaria", estado: "bloqueado" }
    ]
  },
  {
    nombre: "XI CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV111", nombre: "Toxicología Veterinaria", estado: "bloqueado" }
    ]
  },
  {
    nombre: "XII CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV121", nombre: "Internado Rotatorio", estado: "bloqueado" }
    ]
  }
];

function crearMalla() {
  cursosPorCuatrimestre.forEach((cuatri, index) => {
    const columna = document.createElement("div");
    columna.classList.add("cuatrimestre");

    const titulo = document.createElement("h3");
    titulo.textContent = cuatri.nombre;
    columna.appendChild(titulo);

    cuatri.cursos.forEach(curso => {
      const divCurso = document.createElement("div");
      divCurso.classList.add("curso", curso.estado);
      divCurso.textContent = `${curso.codigo} - ${curso.nombre}`;
      columna.appendChild(divCurso);
    });

    const fila = index < 6 ? document.getElementById("fila-superior") : document.getElementById("fila-inferior");
    fila.appendChild(columna);
  });
}

crearMalla();
