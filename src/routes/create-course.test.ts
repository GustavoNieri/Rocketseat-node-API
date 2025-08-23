import { test, expect } from 'vitest'
import request from 'supertest'
import { server } from '../app.ts'
import { faker } from '@faker-js/faker'
import { courses } from '../database/schema.ts'

test('create a course', async () => {
      await server.ready()

      const response = await request(server.server)
            .post('/courses')
            .set('Content-Type', 'application/json')
            .send({ title: faker.lorem.words(4) })

      expect(response.status).toEqual(201)
      expect(response.body).toEqual({
            coursesId: expect.any(String)
      })
})