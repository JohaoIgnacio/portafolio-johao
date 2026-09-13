/**
 * Datos de contacto y enlaces públicos.
 * Punto único de edición: cambiar aquí actualiza navbar, perfil, contacto y SEO.
 */
export const perfil = {
  nombre: "Johao Fabrizio Ignacio Bernal",
  titular: "Consultor Odoo / ERP · Infraestructura · Project Manager",
  email: "johaoignaciob@gmail.com",
  telefono: "+51 932 215 727",
  whatsapp: "https://wa.me/51932215727",
  ubicacion: "Chiclayo, Lambayeque, Perú",

  linkedin: "https://www.linkedin.com/in/johao-fabrizio-ignacio-bernal-4a9b311b6",
  github: "https://github.com/JohaoIgnacio",

  /**
   * Ruta del CV. Los enlaces de descarga solo se muestran cuando `cvDisponible`
   * es true, para no publicar un botón que lleva a un 404.
   *
   * TODO Johao: coloca el PDF en public/cv-johao-ignacio-bernal.pdf y cambia
   * `cvDisponible` a true. Mientras tanto, el sitio ofrece LinkedIn en su lugar.
   */
  cv: "/cv-johao-ignacio-bernal.pdf",
  cvDisponible: false,
} as const;
