import { z } from "zod";

export const createtodo = z.object({
  title: z.string(),
  description: z.string(),
});

export const updatetodo = z.object({
  id: z.string(),
});
