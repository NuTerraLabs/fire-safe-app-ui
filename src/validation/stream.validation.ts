import { z } from 'zod';

export const CreateStreamSchema = z.object({
  name: z
    .string({
      required_error: 'is required',
    })
    .min(1, { message: 'can be empty' }),
  location: z
    .string({
      required_error: 'is required',
    })
    .min(1, { message: 'can be empty' }),
  description: z.string({}).nullable().nullish(),
  group: z.string({}).nullable().nullish(),
  rtsp: z.string({ required_error: 'is required' }).url(),
  isActive: z.boolean().default(true),
});
