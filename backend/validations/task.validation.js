import { z } from "zod";

// CREATE TASK SCHEMA
export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required"),

  description: z
    .string()
    .optional(),

  priority: z
    .enum(["Low", "Medium", "High"])
    .optional(),

  dueDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid due date",
    }),

  status: z
    .enum(["Pending", "Completed"])
    .optional(),
});

// UPDATE STATUS SCHEMA
export const updateTaskStatusSchema = z.object({
  status: z.enum(["Pending", "Completed"]),
});
