import {z} from "zod";

export const eventSchema = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string(),
    location: z.string(),
})

export const placeSchema = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string(),
    address: z.string(),
    site_url: z.string().url(),
    subway: z.string(),
    images: z.array(z.object({
        image: z.string(),
        source: z.object({
            name: z.string(),
            link: z.string(),
        }),
    }))
})

export const APISchema = z.object({
    count: z.number(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(eventSchema)
})

export type Places = z.infer<typeof eventSchema>;
export type Api = z.infer<typeof APISchema>;
export type SinglePlace = z.infer<typeof placeSchema>;