---
title: "Auditoría, rediseño y automatización de un CRM Odoo en producción"
tagline: "Rediseñar la arquitectura de un sistema vivo, con la operación comercial corriendo encima, sin detenerla un solo día."
category: "Odoo · Automatización"
client: "Condominios Villacasa y Zenova Medic"
role: "Jefe de TI"
period: "Jul 2026 - Presente"
summary: "El ERP lo implantó originalmente un partner externo. Mi trabajo empezó después y es de otro tipo: auditar lo que había, rediseñar la arquitectura de automatización, construir la reportería ejecutiva y poner orden en los datos, todo sobre un sistema en producción."
stack: ["Odoo 19 Enterprise", "Studio", "Python", "PostgreSQL", "n8n", "WhatsApp Business API", "Meta Ads", "Apps Script"]
results:
  - value: "-91%"
    label: "Tiempo de respuesta a un lead nuevo: de 7,2 días de promedio histórico a 0,66"
  - value: "0"
    label: "Días de operación comercial detenida durante todo el rediseño"
  - value: "17 → 1"
    label: "Reglas de automatización colapsadas al rediseñar el modelo de etapas"
accent: "teal"
order: 1
featured: true
needsReview: false
diagram: "erp-odoo"
---

## De qué trata realmente este caso

Conviene decirlo al principio, porque cambia cómo se lee todo lo demás: **yo no implanté este
ERP**. Las dos instancias de Odoo 19 Enterprise las desplegó un partner externo antes de mi
llegada, y durante la primera etapa ni siquiera tuve acceso al servidor ni al código fuente,
solo a la interfaz web.

Ese es justamente el trabajo interesante. Implantar un ERP en un entorno limpio es un proyecto
conocido. Entrar a uno que ya está en producción, con un equipo comercial vendiendo encima todos
los días, auditarlo, encontrar lo que está mal y corregirlo sin poder apagar nada, es un problema
distinto y bastante menos cómodo.

## El punto de partida

Dos empresas, dos instancias, unos 15 a 20 usuarios internos entre ambas, y un volumen que no
permitía experimentar a la ligera:

- **Inmobiliaria:** más de 7.300 leads y oportunidades en gestión continua, con un ritmo de
  entrada cercano a 900 al mes, y un catálogo de 495 productos entre lotes y bienes.
- **Salud estética:** unos 32.000 leads y más de 1.700 citas, con un catálogo de 144 productos.

## Lo que encontré en la auditoría

- **Permisos rotos en silencio.** El jefe de una de las mesas de ventas veía **cero** leads de su
  propio equipo. Otros dos responsables no veían entre 700 y 1.200 registros que su rol sí debía
  mostrarles. Llevaba semanas así, sin que nadie lo notara, porque el sistema no falla: 
  simplemente muestra una lista más corta.
- **Duplicados por teléfono.** 351 números repetidos afectando a 720 leads, con el riesgo real de
  que dos asesoras trabajaran al mismo cliente sin saberlo.
- **Un proceso de cobranzas detenido hacía siete semanas.** Dependía de que alguien ejecutara un
  script a mano. Nadie se dio cuenta de que había dejado de correr.
- **Comportamiento del embudo disperso.** La lógica de cada etapa vivía repartida en 17 a 20
  reglas de automatización distintas, en cinco lugares diferentes. Cambiar una etapa obligaba a
  recordar los cinco.

## Las tres piezas que construí

**1. Un motor de SLA con reasignación automática por inactividad.** Un lead sin gestión durante
un plazo configurable se reasigna solo a la asesora con menos carga. Suena simple y no lo es: pasé
por cuatro rediseños corrigiendo condiciones de carrera reales. Rebotes dobles, colas que se caían
en silencio, etapas que retrocedían solas por un comportamiento nativo de Odoo. La versión en
producción tiene memoria de por dónde ya pasó cada lead para rotar entre mesas sin repetir
destinatario, protección contra dobles rebotes, calendario de días hábiles peruanos con feriados,
y un cron independiente para que la cola de reasignaciones no infle el tiempo de transacción.

**2. La etapa se describe a sí misma.** En vez de mantener el comportamiento del embudo escrito
a mano en veinte reglas, puse metadatos sobre el propio modelo de etapas: si sella un hito, cuál,
si aplica SLA, si cuenta como descarte. Una sola regla genérica lee esa configuración y actúa. Las
17 reglas de sellado de hitos se colapsaron en una. Crear una etapa nueva pasó de ser un cambio
en cinco sitios a rellenar cuatro campos.

**3. Un modelo de datos propio para citas recurrentes.** Odoo CRM no tiene noción nativa de un
mismo paciente que agenda varias veces. Diseñé un modelo nuevo con su máquina de estados
—agendada, atendida o no atendida, recurrencia a 90 días— y reconstruí 1.361 citas históricas
desde el log de auditoría, sin un solo error de carga.

Sobre esa última pieza vale la pena contar algo que salió mal. La primera versión atribuía
incorrectamente las citas entre el bot y las asesoras, por un sesgo en los datos de origen. La
detecté al revisar los números, la corregí y dejé el problema documentado, en lugar de reportar
la cifra favorable que la primera versión daba.

## Reportería y atribución

Construí cinco tableros ejecutivos en producción con **Spreadsheet Dashboards nativos de Odoo**,
haciendo todos los conteos en el servidor mediante tablas dinámicas en vez de volcar datos crudos
al cliente. El tablero principal pasó de 10,8 MB a 81 KB, y su carga de entre 30 y 60 segundos a
unos 10.

Aparte, levanté el puente de atribución entre la publicidad pagada y el CRM: cada lead que entra
por WhatsApp o por formulario queda etiquetado con su campaña de origen exacta, mediante
reconocimiento de frases prellenadas y cruce por archivo de importación. Eso alimenta un tablero
de marketing con costo por lead y tasa de cierre por campaña, sin depender de que la plataforma
de anuncios entregue el dato limpio.

## Integraciones de mensajería

El canal nativo de WhatsApp Business de Odoo, más un ecosistema de bots sobre n8n: un agente
conversacional que agenda citas y las escribe en Odoo vía webhook, un motor de recordatorios a 24
y 1 hora sobre el modelo de citas, y un puente de notificaciones de cobranza.

## Cómo se hizo sin romper nada

No hubo un arranque único. Hubo fases sucesivas, cada una con el mismo ciclo:

> respaldo → cambio en entorno controlado → verificación cuantitativa contra la base real →
> aprobación explícita → siguiente fase

Diez semanas de rediseño intensivo sobre un sistema en producción, sin detener la operación
comercial ni un día. Esa disciplina no es un adorno del proceso: es la única razón por la que
tocar permisos, reasignaciones y catálogos de un CRM vivo no terminó en un incidente.

## Lo que este sistema todavía no hace

Por precisión, porque un caso de estudio que solo enumera logros no es creíble:

- **No hay facturación electrónica SUNAT.** Los contratos de compraventa y la cobranza viven
  fuera de Odoo, sobre PostgreSQL y NocoDB. Existe un proyecto de migración en diseño, sin
  ejecutar.
- **Contabilidad, Ventas y Facturación de Odoo no están en uso real.** Configurarlos no ha sido
  parte de este trabajo y no lo presento como tal.
- **No hay medición de concurrencia en hora punta.** Nunca se instrumentó, así que no tengo el
  dato.
