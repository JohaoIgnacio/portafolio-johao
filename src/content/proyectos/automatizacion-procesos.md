---
title: "Automatización de procesos y analítica operativa"
tagline: "Tareas manuales convertidas en procesos que corren solos y se pueden auditar."
category: "Automatización · Datos"
client: "Municipalidad Distrital de Reque, programas sociales y clientes privados"
role: "Desarrollador y analista de procesos"
period: "2024 - Presente"
summary: "Conjunto de automatizaciones sobre procesos administrativos reales: cruce de padrones, detección de duplicados, generación de reportes y tableros de control para dirección."
stack: ["Python", "pandas", "REST APIs", "SQL Server", "PostgreSQL", "Power BI", "Power Automate", "Azure AI"]
results:
  - value: "5"
    label: "Procesos institucionales clave automatizados"
  - value: "-25%"
    label: "Errores por captura manual de datos"
  - value: "<1 min"
    label: "Generación de reportes que antes tomaban días"
accent: "rose"
order: 5
featured: true
needsReview: false
diagram: "automatizacion"
---

## Contexto

Varios procesos administrativos consistían en mover datos entre sistemas a mano: exportar
de uno, limpiar en Excel, cruzar contra otro padrón, corregir a ojo y volver a cargar. Cada
paso era una oportunidad de error, y el resultado no era reproducible.

## Problema

- Cruces de padrones hechos manualmente sobre miles de registros.
- Duplicados que solo se detectaban cuando ya habían causado un problema.
- Reportes que tomaban días de trabajo y quedaban desactualizados al entregarse.
- Ningún registro de cómo se llegó a una cifra.

## Lo que se automatizó

**Cruce y deduplicación de padrones.** Rutinas en Python con pandas que normalizan
documentos de identidad y nombres, aplican coincidencia difusa sobre los casos ambiguos y
emiten la lista de duplicados para revisión humana en lugar de borrarlos por su cuenta.

**Reportería.** Consolidación automática desde las fuentes de datos hacia tableros de
Power BI, de modo que el reporte deja de ser un entregable y pasa a ser una vista siempre
vigente.

**Flujos administrativos.** Automatización de notificaciones, derivaciones y seguimiento de
expedientes mediante APIs REST y Power Automate.

## Decisiones que marcaron el resultado

**La automatización propone, la persona decide.** En procesos que afectan a beneficiarios
reales de programas sociales, el sistema marca los casos dudosos y los deriva a revisión.
Nunca da de baja a nadie por su cuenta.

**Todo proceso deja rastro.** Cada corrida registra qué se procesó, cuándo y con qué
resultado, de modo que cualquier cifra se puede reconstruir.

**Reproducible antes que rápido.** El valor no fue tanto la velocidad como poder repetir el
mismo proceso y obtener el mismo resultado.

## Resultado

Cinco procesos institucionales pasaron de manuales a automáticos, con una reducción medible
de errores de captura y reportes que se generan en menos de un minuto.
