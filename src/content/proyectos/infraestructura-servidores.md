---
title: "Estaciones de servidores e infraestructura institucional"
tagline: "Diseño, montaje y operación de la infraestructura completa: servidor, red y perímetro."
category: "Infraestructura · Redes"
client: "Municipalidad Distrital de Reque y clientes privados"
role: "Arquitecto de infraestructura y administrador de sistemas"
period: "2024 - 2025"
summary: "Montaje de estaciones de servidor de punta a punta, del hardware al servicio publicado: almacenamiento redundante, respaldo eléctrico, red cableada e inalámbrica de 40 nodos y firewall perimetral."
stack: ["Windows Server", "Linux", "RAID 1", "MikroTik RouterOS", "VPN", "WiFi 6", "Cat6", "UPS"]
results:
  - value: "99.9%"
    label: "Disponibilidad del servidor institucional"
  - value: "40"
    label: "Nodos de red cableada e inalámbrica desplegados"
  - value: "0"
    label: "Incidentes de seguridad en 12 meses de operación"
accent: "graphite"
order: 2
featured: true
needsReview: false
---

## Contexto

La institución operaba sin infraestructura propia: los sistemas vivían en equipos de
escritorio bajo los mismos escritorios del personal, sin respaldo eléctrico, sin
redundancia de disco y sin separación entre la red administrativa y la de atención
al público.

## Problema

- Un solo disco duro entre los datos institucionales y su pérdida total.
- Cortes eléctricos que apagaban servicios en pleno horario de atención.
- Red plana: cualquier equipo veía a cualquier otro.
- Sin perímetro, sin registro de tráfico, sin control de acceso remoto.

## Lo que se construyó

**Estación de servidor.** Dimensionamiento del equipo según carga real de los sistemas a
alojar, almacenamiento en RAID 1 para tolerar la caída de un disco sin perder servicio,
UPS dimensionada para sostener un apagado ordenado y Windows Server como base de los
servicios institucionales.

**Planta de red.** Cableado estructurado Cat6 y cobertura inalámbrica WiFi 6 sobre 40 nodos,
con segmentación entre la red administrativa, la de atención ciudadana y la de invitados.

**Perímetro.** Firewall sobre MikroTik RouterOS con reglas de filtrado, control de ancho de
banda por segmento, registro de tráfico y VPN para el acceso remoto administrativo, incluida
la conexión de oficinas remotas por enlace de radio.

## Decisiones que marcaron el resultado

**Redundancia donde duele, no en todas partes.** El presupuesto público no daba para alta
disponibilidad completa, así que se concentró en los dos puntos de falla que realmente
detienen la operación: el disco y la energía.

**Segmentar antes que endurecer.** Separar la red en segmentos con propósito claro eliminó
de raíz clases enteras de problema, y costó menos que cualquier herramienta de seguridad
añadida encima de una red plana.

**Documentar el rack.** Diagrama de red, inventario de nodos y credenciales bajo custodia,
de manera que la infraestructura no dependa de que su autor siga estando disponible.

## Resultado

Infraestructura estable durante todo el periodo de operación, sin incidentes de seguridad
registrados y con conectividad completa en las tres sedes, incluidas las oficinas remotas
enlazadas por radio.
