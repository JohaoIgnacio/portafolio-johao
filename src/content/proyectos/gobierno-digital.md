---
title: "Registro civil digital y rescate del archivo histórico"
tagline: "Consultas de horas a minutos y un siglo de actas en papel convertido en datos."
category: "Gobierno digital"
client: "Municipalidad Distrital de Reque"
role: "Desarrollador full stack y responsable de digitalización"
period: "2024"
summary: "Sistema de registro civil que reemplazó la búsqueda manual en libros físicos, acompañado del proceso de digitalización y OCR del archivo histórico completo."
stack: ["Java", "Spring Boot", "React", "PostgreSQL", "Python", "OCR", "AWS S3"]
results:
  - value: "<5 min"
    label: "Tiempo de consulta de un acta, antes de 2 a 6 horas"
  - value: "90%+"
    label: "Del archivo histórico digitalizado e indexado"
  - value: "5"
    label: "Áreas municipales integradas sobre el mismo sistema"
accent: "amber"
order: 4
featured: true
needsReview: false
---

## Contexto

Atender la solicitud de una copia de acta significaba que un trabajador bajara al archivo
y revisara libros encuadernados, tomo por tomo, hasta encontrar el registro. El proceso
tomaba entre dos y seis horas, y el ciudadano debía volver otro día.

El archivo físico, además, se deterioraba: papel de décadas, manipulación diaria y ninguna
copia de respaldo de documentos legalmente irreemplazables.

## Problema

- Búsqueda lineal sobre soporte físico, sin índice.
- Riesgo real de pérdida irreversible del archivo histórico.
- Cinco áreas municipales trabajando sobre expedientes en papel que circulaban entre ellas.

## Enfoque

**Digitalización.** Escaneo del archivo con equipo de producción documental, procesamiento
por OCR en Python para extraer los campos indexables de cada acta, y almacenamiento del
original en la nube junto a su versión de datos. El original escaneado se conserva siempre:
el OCR indexa, no reemplaza.

**Sistema.** Backend Java con Spring Boot sobre PostgreSQL y frontend React, con búsqueda
por nombre, número de acta y rango de fechas, más la emisión de la copia desde el propio
sistema.

**Integración.** Las cinco áreas pasaron a trabajar sobre el mismo expediente digital, lo
que eliminó la circulación física de documentos entre oficinas.

## Decisiones que marcaron el resultado

**Indexar lo buscable, no todo.** Intentar transcribir el texto completo de cada acta con
OCR sobre caligrafía antigua habría fallado. Extraer solo los campos que la gente realmente
busca hizo el proyecto viable.

**Verificación humana por muestreo.** Cada lote digitalizado pasó por revisión sobre una
muestra antes de darse por bueno; el OCR sin control de calidad crea un índice en el que
nadie puede confiar.

**Conservar el papel.** La digitalización es respaldo y acceso, no destrucción del original.

## Resultado

Una consulta que tomaba hasta seis horas se resuelve en menos de cinco minutos, y más del
90% del archivo histórico existe hoy como copia digital indexada, fuera del alcance de un
incendio o una inundación.
