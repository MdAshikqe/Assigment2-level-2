import { z } from 'zod';

const zodProductSchemaValidation = z.object({
  name: z.string().min(1).max(20),
  description: z.string(),
  price: z.number().positive(),
  category: z.string().min(1).max(255),
  tags: z.array(z.string()),
  variants: z.array(
    z.object({
      type: z.string().min(1).max(255),
      value: z.string(),
    }),
  ),
  inventory: z.object({
    quantity: z.number().int().positive(),
    inStock: z.boolean(),
  }),
});

export default zodProductSchemaValidation;
