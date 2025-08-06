import { z } from "zod";

export const documentationSectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  order: z.number(),
});

export type DocumentationSection = z.infer<typeof documentationSectionSchema>;

export const downloadRequestSchema = z.object({
  format: z.enum(["html", "pdf"]),
  sections: z.array(z.string()).optional(),
});

export type DownloadRequest = z.infer<typeof downloadRequestSchema>;
