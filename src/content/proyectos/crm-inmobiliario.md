---
title: "Plataforma CRM para el sector inmobiliario"
tagline: "Un solo tablero para el ciclo completo de lead a contrato."
category: "Producto · Full Stack"
client: "Corporación inmobiliaria"
role: "Project Manager y desarrollador full stack"
period: "2025"
summary: "CRM propio que ordena el ciclo comercial inmobiliario de punta a punta: captación, calificación, seguimiento y cierre, con trazabilidad por asesor y por unidad."
stack: ["React", "Java", "Spring Boot", "PostgreSQL", "AWS", "REST API"]
results:
  - value: "-35%"
    label: "Duración del ciclo lead-to-contract"
  - value: "50+"
    label: "Usuarios activos entre asesores y administración"
  - value: "100%"
    label: "Trazabilidad de cada lead desde su origen hasta el cierre"
accent: "cobalt"
order: 3
featured: true
needsReview: true
diagram: "crm"
---

## Contexto

El equipo comercial gestionaba sus oportunidades en hojas de cálculo personales y
conversaciones de WhatsApp. Un lead podía ser trabajado por dos asesores a la vez, o por
ninguno, y la gerencia no tenía forma de ver el embudo sin pedir reportes uno por uno.

## Problema

- Sin fuente única del estado de cada oportunidad.
- Leads duplicados y leads perdidos por falta de seguimiento.
- Imposible medir conversión por canal, por asesor o por proyecto.
- El historial de la negociación vivía en el teléfono del asesor, no en la empresa.

## Arquitectura

- **Frontend** en React: tablero de embudo, ficha de lead con historial completo y vistas
  diferenciadas por rol.
- **Backend** en Java con Spring Boot, exponiendo una API REST con autenticación y control
  de acceso por rol.
- **Datos** en PostgreSQL, con el modelo centrado en la oportunidad y su línea de tiempo de
  interacciones.
- **Despliegue** en AWS.

<!-- COMPLETAR: ¿hay integración con WhatsApp Business, portales inmobiliarios o el ERP Odoo? Si el CRM alimenta a Odoo o viceversa, vale la pena decirlo: conecta dos casos del portafolio. -->

## Decisiones que marcaron el resultado

**El lead pertenece a la empresa, no al asesor.** Toda interacción se registra contra la
oportunidad. Cuando un asesor rota, la negociación continúa con contexto en lugar de
empezar de cero.

**Asignación con reglas explícitas.** Definir quién toma cada lead entrante, y en cuánto
tiempo debe responderlo, eliminó tanto la duplicidad como el lead huérfano.

**Medir el embudo desde el primer día.** Instrumentar las transiciones de estado desde el
inicio fue lo que permitió después demostrar la reducción del ciclo comercial.

## Resultado

El ciclo de lead a contrato se acortó de forma medible, y la gerencia pasó de pedir
reportes a consultar el embudo directamente.

<!-- COMPLETAR: el -35% conviene respaldarlo con el método (ciclo promedio antes vs. después, sobre qué ventana de tiempo y cuántas operaciones). Una cifra explicada vale mucho más que una cifra sola. -->
