---
title: "Implementación y desarrollo de ERP sobre Odoo"
tagline: "De procesos dispersos en hojas de cálculo a un ERP único con módulos a medida."
category: "ERP · Odoo"
client: "Corporación inmobiliaria"
role: "Project Manager y desarrollador Odoo"
period: "2025 - Presente"
summary: "Implantación funcional de Odoo y desarrollo de módulos propios en Python para cubrir los procesos que el estándar no resuelve: seguimiento comercial, control documental y reportería de dirección."
stack: ["Odoo", "Python", "PostgreSQL", "XML / QWeb", "Docker", "Nginx", "Linux"]
results:
  - value: "1"
    label: "ERP único para comercial, administración y operaciones, en lugar de hojas paralelas"
  - value: "0"
    label: "Parches al core de Odoo: toda extensión vive en addons propios versionados"
  - value: "0"
    label: "Reportes de dirección consolidados a mano"
accent: "teal"
order: 1
featured: true
needsReview: true
diagram: "erp-odoo"
---

## Contexto

La operación funcionaba sobre hojas de cálculo paralelas, correos y archivos compartidos.
Cada área mantenía su propia versión de los datos, de modo que cualquier reporte de dirección
exigía reconciliar cifras a mano antes de poder confiar en ellas.

<!-- COMPLETAR: nombre del cliente (o confirmar si se mantiene anónimo por NDA), número de usuarios, volumen de registros migrados. -->

## Problema

- Información duplicada e inconsistente entre áreas.
- Sin trazabilidad del ciclo comercial de punta a punta.
- Reportería manual, tardía y difícil de auditar.
- Procesos de negocio que ningún módulo estándar cubría tal cual.

## Enfoque

El proyecto se abordó en dos frentes simultáneos, funcional y técnico.

**Frente funcional.** Levantamiento de procesos con cada área, mapeo contra los módulos
estándar de Odoo y decisión explícita, proceso por proceso, entre adaptar la operación al
estándar o desarrollar a medida. La regla fue mantener el core intacto siempre que se
pudiera: cada personalización que se evita es mantenimiento que no se hereda en la
siguiente actualización de versión.

**Frente técnico.** Desarrollo de módulos propios en Python sobre el framework de Odoo:
modelos, vistas XML, reglas de acceso por grupo, automatizaciones de servidor y reportes
QWeb. Todo empaquetado como addons versionados en Git, no como cambios directos sobre
la base de datos.

## Arquitectura

- **Despliegue** contenedorizado con Docker: Odoo, PostgreSQL y Nginx como proxy inverso con TLS.
- **Addons propios** montados como volumen desde un repositorio Git versionado.
- **Entornos separados** de pruebas y producción, con restauración de base para validar
  cada cambio antes de subirlo.
- **Respaldos** automáticos de base de datos y filestore.

<!-- COMPLETAR: si hay integraciones con servicios externos (WhatsApp, pasarela de pago, facturación electrónica SUNAT, Power BI), detallarlas aquí. -->

## Decisiones que marcaron el resultado

**Migrar datos antes que funcionalidad.** La carga histórica limpia y deduplicada se hizo
primero; sin eso, el ERP habría heredado exactamente el problema que venía a resolver.

**Nada de parches al core.** Toda extensión vive en addons propios. El costo es más trabajo
al inicio; el beneficio es que actualizar de versión sigue siendo posible.

**Permisos por rol desde el día uno.** Definir grupos y reglas de registro al principio evita
la reescritura completa del modelo de seguridad cuando el sistema ya está en uso.

## Resultado

Un solo sistema para el ciclo comercial y administrativo, con datos que dirección consulta
directamente en lugar de pedirlos. Los reportes que antes se armaban a mano ahora los emite
el propio ERP.

<!-- COMPLETAR: métricas defendibles (horas/mes ahorradas, reducción de tiempo de cierre, usuarios activos). Preferible dos cifras verificables que cinco estimadas. -->
