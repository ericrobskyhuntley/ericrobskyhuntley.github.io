import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const roles = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/roles" }),
  schema: z.object({
    url: z.string(),
    links: z.array(
        z.object({
            desc: z.string(),
            link: z.string(),
            icon: z.string()
        })
    ),
    order: z.number(),
    published: z.boolean()
  })
});

export const collections = { roles };