import {z} from "zod";

export const eventSchema = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string(),
    address: z.string(),
    phone: z.string(),
    site_url: z.string().url(),
    subway: z.string(),
    is_closed: z.boolean(),
    location: z.string(),
    has_parking_lot: z.boolean()
})

export const APISchema = z.object({
    count: z.number(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(eventSchema)
})

export type Place = z.infer<typeof eventSchema>;
export type Api = z.infer<typeof APISchema>;