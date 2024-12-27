import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const portfolio = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		client: z.string(),
		pubDate: z.coerce.date(),
		initDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
		tags: z.array(z.string()),
		heroImage: z.string().optional(),
	}),
});

const services = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()),
	}),
});

export const collections = { blog, portfolio, services };
