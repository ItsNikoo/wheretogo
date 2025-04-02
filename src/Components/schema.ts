import { z } from "zod";

// Схема для одного места (достопримечательности)
const placeSchema = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string(),
    address: z.string(),
    phone: z.string(),
    site_url: z.string().url(),
    subway: z.string(),
});

// Схема для массива мест в одном городе
const cityPlacesSchema = z.array(placeSchema);

// Схема для всех городов
const citiesDataSchema = z.array(
    z.record(z.string(), cityPlacesSchema) // { [cityName]: Place[] }
);

// Экспорт схемы
export const citiesSchema = citiesDataSchema;

// Тип TypeScript на основе схемы (опционально)
export type CitiesData = z.infer<typeof citiesSchema>;