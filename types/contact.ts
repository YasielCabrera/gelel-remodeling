import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number")
    .transform((val) => val.replace(/[\s\-\(\)]/g, "")),
  address: z
    .string()
    .min(1, "Address is required")
    .min(5, "Please enter a complete address"),
  address2: z.string().optional(),
  city: z
    .string()
    .min(1, "City is required")
    .min(2, "Please enter a valid city name"),
  zipCode: z
    .string()
    .min(1, "Zip code is required")
    .regex(
      /^\d{5}(-\d{4})?$/,
      "Please enter a valid US zip code (e.g., 12345 or 12345-6789)"
    ),
  projectDescription: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.length >= 20,
      "If provided, description must be at least 20 characters"
    )
    .refine(
      (val) => !val || val.length <= 1000,
      "Description must be less than 1000 characters"
    ),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
