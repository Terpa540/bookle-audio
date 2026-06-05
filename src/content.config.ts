import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const proyectos = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/proyectos",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    year: z.string(),
    featured: z.boolean().default(false),
    cover: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  proyectos,
  blog,
};