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

  // 🧠 Guardar automáticamente el estado después de actualizar
  localStorage.setItem("estadoCursos", JSON.stringify(cursosPorCuatrimestre));
}

function cargarProgresoGuardado() {
  const datosGuardados = localStorage.getItem("estadoCursos");
  if (datosGuardados) {
    const estadoGuardado = JSON.parse(datosGuardados);
    cursosPorCuatrimestre.forEach((cuatri, i) => {
      cuatri.cursos.forEach((curso, j) => {
        curso.estado = estadoGuardado[i]?.cursos[j]?.estado || "bloqueado";
      });
    });
  }
}

function crearMalla() {
  const filaSuperior = document.getElementById("fila-superior");
  const filaInferior = document.getElementById("fila-inferior");
  filaSuperior.innerHTML = "";
  filaInferior.innerHTML = "";

  cursosPorCuatrimestre.forEach((cuatri, index) => {
    const columna = document.createElement("div");
    columna.classList.add("cuatrimestre");

    const esAzul = index >= 7;

    const titulo = document.createElement("h3");
    titulo.textContent = cuatri.nombre;
    if (esAzul) {
      titulo.classList.add("titulo-azul");
    }
    columna.appendChild(titulo);

    cuatri.cursos.forEach(curso => {
      const divCurso = document.createElement("div");
      divCurso.classList.add("curso", curso.estado);

      if (esAzul) {
        divCurso.classList.add("azul");
      }

      divCurso.textContent = `${curso.codigo} - ${curso.nombre}`;
      divCurso.title = curso.requisitos && curso.requisitos.length > 0
        ? `Requiere: ${curso.requisitos.join(", ")}`
        : "Sin requisitos";

      if (curso.estado === "pendiente" || curso.estado === "completado") {
        divCurso.onclick = () => {
          curso.estado = curso.estado === "pendiente" ? "completado" : "pendiente";
          actualizarEstados(); // actualiza dependientes
          crearMalla();  // vuelve a renderizar
          actualizarBarraProgreso();
        };
      }

      columna.appendChild(divCurso);
    });

    const fila = index < 6 ? filaSuperior : filaInferior;
    fila.appendChild(columna);
  });
}

// ⚡ Inicializar al cargar la página
cargarProgresoGuardado();
actualizarEstados();
crearMalla();
cargarModoOscuro();
actualizarBarraProgreso();

const btnModo = document.getElementById('modo-oscuro-toggle');
btnModo.onclick = () => {
  aplicarModoOscuro();
  btnModo.textContent = document.body.classList.contains('modo-oscuro') ? '☀️ Modo claro' : '🌙 Modo oscuro';
};

function actualizarBarraProgreso() {
  const barra = document.getElementById('progreso-barra');
  const texto = document.getElementById('progreso-texto'); // ← esto es nuevo
  const total = cursosPorCuatrimestre.flatMap(c => c.cursos).length;
  const completados = cursosPorCuatrimestre.flatMap(c => c.cursos).filter(curso => curso.estado === 'completado').length;
  const porcentaje = Math.round((completados / total) * 100);
  
  barra.style.width = `${porcentaje}%`;
  texto.textContent = `${porcentaje}% completado`; // ← actualiza el texto
}

