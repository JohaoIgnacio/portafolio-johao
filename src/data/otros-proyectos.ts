/**
 * Proyectos que no tienen caso de estudio propio.
 * Se muestran condensados bajo los destacados en la sección Proyectos.
 */
export interface OtroProyecto {
  name: string;
  stack: string;
  result: string;
}

export const otrosProyectos: OtroProyecto[] = [
  {
    name: "Dashboard BI financiero para dirección",
    stack: "Power BI, Python, SQL Server",
    result: "Visibilidad financiera en tiempo real, sin consolidación manual",
  },
  {
    name: "Automatización de procesos con Azure AI",
    stack: "Azure Cognitive Services, Python",
    result: "Documentos y formularios procesados sin captura manual",
  },
  {
    name: "Modelo de optimización de cadena de suministro",
    stack: "Python, scikit-learn, pandas",
    result: "-22% de costo logístico en simulación",
  },
  {
    name: "Pipeline de datos para investigación aplicada",
    stack: "Python, pandas, Power BI",
    result: "500+ puntos de datos y 3 informes técnicos de respaldo",
  },
  {
    name: "Gestión de producción de compost orgánico",
    stack: "Python, ML, PostgreSQL, pandas",
    result: "+15% de eficiencia en el ciclo de compostaje (UTP)",
  },
  {
    name: "Plataforma educativa para ONG",
    stack: "React, Node.js, Firebase",
    result: "120+ jóvenes con acceso a contenidos estructurados",
  },
  {
    name: "Programa de alfabetización digital",
    stack: "React, LMS, Firebase",
    result: "150+ estudiantes y 20 docentes capacitados",
  },
  {
    name: "Plataformas educativas con Moodle y Azure",
    stack: "React, Moodle, Azure",
    result: "+40% de accesibilidad al aprendizaje",
  },
  {
    name: "Sistema de gestión de delegados",
    stack: "Node.js, React, PostgreSQL",
    result: "15 delegados coordinados y 3 reconocimientos obtenidos",
  },
];
