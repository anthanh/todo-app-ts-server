import { z } from 'zod'
export const projectSchema = z.object({
  body: z.object({
    title: z.string().min(5, 'Title requires a minimum of 5 characters').trim(),
    description: z.string().min(15, 'Description requires a minimum of 15 characters').trim()
  }),
  params: z.object({
    projectId: z.string()
  })
})

export type ProjectParamsType = z.infer<typeof projectSchema>['params']
export type ProjectBodyType = z.infer<typeof projectSchema>['body']