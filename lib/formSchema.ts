// lib/formSchema.ts
import { z } from "zod";

export const requestSchema = z.object({
  service_type: z.string().min(1),
  description: z.string().min(20, "Descreva melhor o projeto"),
  location: z.string().min(2),
  dimension: z.string().optional(),
  urgency: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().max(0).optional(), // honeypot
});

export type RequestFormData = z.infer<typeof requestSchema>;
