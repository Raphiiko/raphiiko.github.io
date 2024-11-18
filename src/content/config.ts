import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        // banner: z.object({ content: z.string() }).default({
        // content:
        //   "🚧 This site is currently under construction. Please excuse the mess! 🚧",
        // }),
      }),
    }),
  }),
};
