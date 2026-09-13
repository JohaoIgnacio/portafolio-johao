import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const proyectos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    category: z.string(),
    client: z.string(),
    role: z.string(),
    period: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    results: z.array(z.object({ value: z.string(), label: z.string() })),
    accent: z.enum(["teal", "cobalt", "amber", "rose", "graphite"]).default("teal"),
    order: z.number(),
    featured: z.boolean().default(true),
    /** Marca los casos cuyo detalle fino aún debe confirmar Johao antes de publicar. */
    needsReview: z.boolean().default(false),
    /** Diagrama de arquitectura a renderizar. Esquemas de referencia, sin datos de cliente. */
    diagram: z.enum(["erp-odoo", "infraestructura", "crm", "gobierno-digital", "automatizacion"]).optional(),
  }),
});

export const collections = { proyectos };
