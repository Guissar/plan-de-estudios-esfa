function actualizarEstados() {
  const completados = new Set();
  cursosPorCuatrimestre.forEach(cuatri => {
    cuatri.cursos.forEach(curso => {
      if (curso.estado === "completado") {
        completados.add(curso.codigo);
      }
    });
  });
  cursosPorCuatrimestre.forEach(cuatri => {
    cuatri.cursos.forEach(curso => {
      const cumpleReqs = !curso.requisitos || curso.requisitos.every(req => completados.has(req));
      if (curso.estado !== "completado") {
        curso.estado = cumpleReqs ? "pendiente" : "bloqueado";
      }
    });
  });
}

function crearMalla() {
  const filaSuperior = document.getElementById("fila-superior");
  const filaInferior = document.getElementById("fila-inferior");
  filaSuperior.innerHTML = "";
  filaInferior.innerHTML = "";

  cursosPorCuatrimestre.forEach((cuatri, index) => {
    const columna = document.createElement("div");
    columna.classList.add("cuatrimestre");

    // Detectar si es del cuatrimestre 8 en adelante
    const numeroCuatrimestre = parseInt(cuatri.nombre.split(" ")[0]);
    const esAzul = numeroCuatrimestre >= 8;

    const titulo = document.createElement("h3");
    titulo.textContent = cuatri.nombre;
    if (esAzul) {
      titulo.classList.add("titulo-azul");
    }
    columna.appendChild(titulo);

    cuatri.cursos.forEach(curso => {
      const divCurso = document.createElement("div");
      divCurso.classList.add("curso", curso.estado);

      // Si el cuatrimestre es azul, agregamos la clase
      if (esAzul) {
        divCurso.classList.add("azul");
      }

      divCurso.textContent = `${curso.codigo} - ${curso.nombre}`;
      divCurso.title = curso.requisitos && curso.requisitos.length > 0 ? `Requiere: ${curso.requisitos.join(", ")}` : "Sin requisitos";

      if (curso.estado === "pendiente" || curso.estado === "completado") {
        divCurso.onclick = () => {
          curso.estado = curso.estado === "pendiente" ? "completado" : "pendiente";
          actualizarEstados();
          crearMalla();
        };
      }

      columna.appendChild(divCurso);
    });

    const fila = index < 6 ? filaSuperior : filaInferior;
    fila.appendChild(columna);
  });
}

actualizarEstados();
crearMalla();
