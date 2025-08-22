const cursosPorCuatrimestre = [
  {
    nombre: "I CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV011", nombre: "Zootecnia General I", estado: "pendiente" },
      { codigo: "UVMV012", nombre: "Química Inorgánica Básica", estado: "bloqueado" },
      { codigo: "UVMV013", nombre: "Biología Celular y Molecular", estado: "bloqueado" },
      { codigo: "UVMV014", nombre: "Bioestadística", estado: "bloqueado" },
      { codigo: "UVMV015", nombre: "Seminario de Formación I", estado: "bloqueado" },
    ],
  },
  {
    nombre: "II CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV021", nombre: "Zootecnia General II", requisitos: ["UVMV011"] },
      { codigo: "UVMV022", nombre: "Química Orgánica Básica", requisitos: ["UVMV012"] },
      { codigo: "UVMV023", nombre: "Anatomía Topográfica y Comparada I", requisitos: ["UVMV013"] },
      { codigo: "UVMV024", nombre: "Histología Veterinaria", requisitos: ["UVMV013"] },
      { codigo: "UVMV025", nombre: "Seminario de Formación II", requisitos: ["UVMV015"] },
    ],
  },
  {
    nombre: "III CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV031", nombre: "Anatomía Topográfica y Comparada II", requisitos: ["UVMV023"] },
      { codigo: "UVMV032", nombre: "Bioquímica", requisitos: ["UVMV022"] },
      { codigo: "UVMV033", nombre: "Fisiología Animal General y Comparada I", requisitos: ["UVMV024"] },
      { codigo: "UVMV034", nombre: "Nutrición Animal", requisitos: ["UVMV021"] },
      { codigo: "UVMV035", nombre: "Seminario de Formación III", requisitos: ["UVMV025"] },
    ],
  },
  {
    nombre: "IV CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV041", nombre: "Patología General I", requisitos: ["UVMV033"] },
      { codigo: "UVMV042", nombre: "Fisiología Animal II", requisitos: ["UVMV033"] },
      { codigo: "UVMV043", nombre: "Microbiología", requisitos: ["UVMV032"] },
      { codigo: "UVMV044", nombre: "Parasitología General", requisitos: ["UVMV024"] },
      { codigo: "UVMV045", nombre: "Seminario de Formación IV", requisitos: ["UVMV035"] },
    ],
  },
  {
    nombre: "V CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV051", nombre: "Patología Especial", requisitos: ["UVMV041"] },
      { codigo: "UVMV052", nombre: "Enfermedades Parasitarias", requisitos: ["UVMV044"] },
      { codigo: "UVMV053", nombre: "Toxicología", requisitos: ["UVMV042"] },
      { codigo: "UVMV054", nombre: "Inspección de Mataderos", requisitos: ["UVMV043"] },
      { codigo: "UVMV055", nombre: "Seminario de Formación V", requisitos: ["UVMV045"] },
    ],
  },
  {
    nombre: "VI CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV061", nombre: "Enfermedades de las Aves", requisitos: ["UVMV051"] },
      { codigo: "UVMV062", nombre: "Epizootiología I", requisitos: ["UVMV051"] },
      { codigo: "UVMV063", nombre: "Microbiología de los Alimentos", requisitos: ["UVMV043"] },
      { codigo: "UVMV064", nombre: "Análisis Clínico", requisitos: ["UVMV051", "UVMV053"] },
      { codigo: "UVMV065", nombre: "Seminario de Formación VI", requisitos: ["UVMV055"] },
    ],
  },
  {
    nombre: "VII CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV071", nombre: "Farmacología y Terapéutica I", requisitos: ["UVMV042"] },
      { codigo: "UVMV072", nombre: "Epizootiología II", requisitos: ["UVMV062"] },
      { codigo: "UVMV073", nombre: "Clínica Propedéutica de Animales de Compañía", requisitos: ["UVMV051"] },
      { codigo: "UVMV074", nombre: "Fisiología y Patología Reproductora de la Hembra", requisitos: ["UVMV051"] },
      { codigo: "UVMV075", nombre: "Seminario de Formación VII", requisitos: ["UVMV065"] },
    ],
  },
  {
    nombre: "VIII CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV081", nombre: "Clínica Propedéutica de Mamíferos de Granja", requisitos: ["UVMV051"] },
      { codigo: "UVMV082", nombre: "Cirugía General", requisitos: ["UVMV071"] },
      { codigo: "UVMV083", nombre: "Fisiología y Patología Reproductora del Macho", requisitos: ["UVMV051"] },
      { codigo: "UVMV084", nombre: "Obstetricia", requisitos: ["UVMV074", "UVMV083"] },
      { codigo: "UVMV085", nombre: "Farmacología y Terapéutica II", requisitos: ["UVMV071"] },
      { codigo: "UVMV086", nombre: "Seminario de Formación VIII", requisitos: ["UVMV075"] },
    ],
  },
  {
    nombre: "IX CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV091", nombre: "Manejo Médico Integral Mamíferos de Granja", requisitos: ["UVMV081"] },
      { codigo: "UVMV092", nombre: "Manejo Médico Integral Animales de Compañía", requisitos: ["UVMV073"] },
      { codigo: "UVMV093", nombre: "Seminario de Formación IX", requisitos: ["UVMV086"] },
    ],
  },
  {
    nombre: "X CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV101", nombre: "Práctica Médica Animales de Granja", requisitos: ["UVMV091"] },
      { codigo: "UVMV102", nombre: "Seminario de Formación X", requisitos: ["UVMV093"] },
    ],
  },
  {
    nombre: "XI CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV111", nombre: "Práctica Médica en Animales de Compañía", requisitos: ["UVMV092"] },
      { codigo: "UVMV112", nombre: "Práctica Medicina Veterinaria en la Industria Alimenticia", requisitos: ["UVMV063"] },
      { codigo: "UVMV113", nombre: "Seminario de Formación XI", requisitos: ["UVMV102"] },
    ],
  },
  {
    nombre: "XII CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV121", nombre: "Internado Supervisado", requisitos: ["UVMV111", "UVMV112"] },
      { codigo: "UVMV122", nombre: "Ética Profesional", requisitos: ["UVMV113"] },
    ],
  },
];
