import { type ZodSchema, z } from "zod";

export const getSerializer = <T>(schema: ZodSchema<T>) => ({
  serialize: (data: T): string => JSON.stringify(data),
  deserialize: (text: string) => schema.parse(JSON.parse(text)) as T
});
