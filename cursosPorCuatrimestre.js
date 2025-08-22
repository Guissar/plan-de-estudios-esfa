const cursosPorCuatrimestre = [
  {
    nombre: "I CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV011", nombre: "Zootecnia General I", estado: "pendiente", requisitos: [] },
      { codigo: "UVMV012", nombre: "Química Inorgánica Básica", estado: "pendiente", requisitos: [] },
      { codigo: "UVMV013", nombre: "Biología Celular y Molecular", estado: "pendiente", requisitos: [] },
      { codigo: "UVMV014", nombre: "Bioestadística", estado: "pendiente", requisitos: [] },
      { codigo: "UVMV015", nombre: "Seminario de Formación I", estado: "pendiente", requisitos: [] }
    ]
  },
  {
    nombre: "II CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV021", nombre: "Zootecnia General II", estado: "bloqueado", requisitos: ["UVMV011", "UVMV015"] },
      { codigo: "UVMV022", nombre: "Química Orgánica Básica", estado: "bloqueado", requisitos: ["UVMV012", "UVMV015"] },
      { codigo: "UVMV023", nombre: "Anatomía Topográfica y Comparada I", estado: "bloqueado", requisitos: ["UVMV011", "UVMV013", "UVMV015"] },
      { codigo: "UVMV024", nombre: "Histología Veterinaria", estado: "bloqueado", requisitos: ["UVMV013", "UVMV015"] },
      { codigo: "UVMV025", nombre: "Seminario de Formación II", estado: "bloqueado", requisitos: ["UVMV015"] }
    ]
  },
  {
    nombre: "III CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV031", nombre: "Anatomía Topográfica y Comparada II", estado: "bloqueado", requisitos: ["UVMV015", "UVMV023", "UVMV024"] },
      { codigo: "UVMV032", nombre: "Bioquímica", estado: "bloqueado", requisitos: ["UVMV013", "UVMV015", "UVMV022"] },
      { codigo: "UVMV033", nombre: "Fisiología Animal General y Comparada I", estado: "bloqueado", requisitos: ["UVMV015", "UVMV022", "UVMV023", "UVMV024"] },
      { codigo: "UVMV034", nombre: "Nutrición Animal", estado: "bloqueado", requisitos: ["UVMV013", "UVMV014", "UVMV021", "UVMV022", "UVMV024"] },
      { codigo: "UVMV035", nombre: "Seminario de Formación III", estado: "bloqueado", requisitos: ["UVMV025"] }
    ]
  },
  {
    nombre: "IV CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV041", nombre: "Patología General I", estado: "bloqueado", requisitos: ["UVMV015", "UVMV031", "UVMV032", "UVMV033", "UVMV034"] },
      { codigo: "UVMV042", nombre: "Fisiología Animal II", estado: "bloqueado", requisitos: ["UVMV015", "UVMV032", "UVMV033"] },
      { codigo: "UVMV043", nombre: "Microbiología", estado: "bloqueado", requisitos: ["UVMV015", "UVMV032", "UVMV033"] },
      { codigo: "UVMV044", nombre: "Parasitología General", estado: "bloqueado", requisitos: ["UVMV015", "UVMV031", "UVMV032", "UVMV033", "UVMV034"] },
      { codigo: "UVMV045", nombre: "Seminario de Formación IV", estado: "bloqueado", requisitos: ["UVMV035"] }
    ]
  },
  {
    nombre: "V CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV051", nombre: "Patología Especial", estado: "bloqueado", requisitos: ["UVMV015", "UVMV041", "UVMV042", "UVMV043", "UVMV044"] },
      { codigo: "UVMV052", nombre: "Enfermedades Parasitarias", estado: "bloqueado", requisitos: ["UVMV015", "UVMV041", "UVMV042", "UVMV043", "UVMV044"] },
      { codigo: "UVMV053", nombre: "Toxicología", estado: "bloqueado", requisitos: ["UVMV015", "UVMV041", "UVMV042"] },
      { codigo: "UVMV054", nombre: "Inspección de Mataderos", estado: "bloqueado", requisitos: ["UVMV015", "UVMV041", "UVMV042", "UVMV043", "UVMV044"] },
      { codigo: "UVMV055", nombre: "Seminario de Formación V", estado: "bloqueado", requisitos: ["UVMV045"] }
    ]
  },
  {
    nombre: "VI CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV061", nombre: "Enfermedades de las Aves", estado: "bloqueado", requisitos: ["UVMV015", "UVMV051", "UVMV052", "UVMV053", "UVMV054"] },
      { codigo: "UVMV062", nombre: "Epizootiología I", estado: "bloqueado", requisitos: ["UVMV014", "UVMV015", "UVMV051", "UVMV052"] },
      { codigo: "UVMV063", nombre: "Microbiología de los Alimentos", estado: "bloqueado", requisitos: ["UVMV015", "UVMV043", "UVMV051", "UVMV053", "UVMV054"] },
      { codigo: "UVMV064", nombre: "Análisis Clínico", estado: "bloqueado", requisitos: ["UVMV015", "UVMV051"] },
      { codigo: "UVMV065", nombre: "Seminario de Formación VI", estado: "bloqueado", requisitos: ["UVMV055"] }
    ]
  },
  {
    nombre: "VII CUATRIMESTRE",
    cursos: [
      { codigo: "UVMV071", nombre: "Farmacología y Terapéutica I", estado: "bloqueado", requisitos: ["UVMV015", "UVMV061", "UVMV063"] },
      { codigo: "UVMV072", nombre: "Epizootiología II", estado: "bloqueado", requisitos: ["UVMV015", "UVMV062"] },
      { codigo: "UVMV073", nombre: "Clínica Propedéutica de Animales de Compañía", estado: "bloqueado", requisitos: ["UVMV015", "UVMV064"] },
      { codigo: "UVMV074", nombre: "Fisiología y Patología Reproductora de la Hembra", estado: "bloqueado", requisitos: ["UVMV015", "UVMV053", "UVMV064"] },
      { codigo: "UVMV075", nombre: "Seminario de Formación VII", estado: "bloqueado", requisitos: ["UVMV065"] }
    ]
  },
  {
    nombre: "VIII CUATRIMESTRE",
  cursos: [
    { codigo: "UVMV081", nombre: "Clínica Propedéutica Mamíferos de Granja", estado: "bloqueado", requisitos: ["UVMV015", "UVMV071", "UVMV072", "UVMV073", "UVMV074"] },
    { codigo: "UVMV082", nombre: "Cirugía General", estado: "bloqueado", requisitos: ["UVMV015", "UVMV071", "UVMV072", "UVMV073", "UVMV074"] },
    { codigo: "UVMV083", nombre: "Fisiología y Patología Reproductora Macho", estado: "bloqueado", requisitos: ["UVMV015", "UVMV071", "UVMV072", "UVMV073", "UVMV074"] },
    { codigo: "UVMV084", nombre: "Obstetricia", estado: "bloqueado", requisitos: ["UVMV015", "UVMV071", "UVMV072", "UVMV073", "UVMV074"] },
    { codigo: "UVMV085", nombre: "Farmacología y Terapéutica II", estado: "bloqueado", requisitos: ["UVMV015", "UVMV071", "UVMV072", "UVMV073", "UVMV074"] },
    { codigo: "UVMV086", nombre: "Seminario de Formación VIII", estado: "bloqueado", requisitos: ["UVMV075"] }
  ]
},
{
  nombre: "IX CUATRIMESTRE",
  cursos: [
    { codigo: "UVMV091", nombre: "Manejo Médico Integral Mamíferos de Granja", estado: "bloqueado", requisitos: ["UVMV081", "UVMV082", "UVMV083", "UVMV084", "UVMV085"] },
    { codigo: "UVMV092", nombre: "Manejo Médico Integral Animales de Compañía", estado: "bloqueado", requisitos: ["UVMV081", "UVMV082", "UVMV083", "UVMV084", "UVMV085"] },
    { codigo: "UVMV093", nombre: "Seminario de Formación IX", estado: "bloqueado", requisitos: ["UVMV086"] }
  ]
},
{
  nombre: "X CUATRIMESTRE",
  cursos: [
    { codigo: "UVMV101", nombre: "Práctica Médica Animales de Granja", estado: "bloqueado", requisitos: ["UVMV091", "UVMV092"] },
    { codigo: "UVMV102", nombre: "Seminario de Formación X", estado: "bloqueado", requisitos: ["UVMV093"] }
  ]
},
{
  nombre: "XI CUATRIMESTRE",
  cursos: [
    { codigo: "UVMV111", nombre: "Práctica Médica en Animales de Compañía", estado: "bloqueado", requisitos: ["UVMV101"] },
    { codigo: "UVMV112", nombre: "Práctica Medicina Veterinaria en la Industria Alimenticia", estado: "bloqueado", requisitos: ["UVMV101"] },
    { codigo: "UVMV113", nombre: "Seminario de Formación XI", estado: "bloqueado", requisitos: ["UVMV102"] }
  ]
},
{
  nombre: "XII CUATRIMESTRE",
  cursos: [
    { codigo: "UVMV121", nombre: "Actividad Profesional Final", estado: "bloqueado", requisitos: ["UVMV111", "UVMV112"] },
    { codigo: "UVMV122", nombre: "Seminario de Formación XII", estado: "bloqueado", requisitos: ["UVMV113"] }
  ]
}
];
