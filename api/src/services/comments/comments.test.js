import { db } from 'src/lib/db'

import { comments, createComment } from './comments'

describe('comments', () => {
  scenario('returns all comments', async (scenario) => {
    const result = await comments({ postId: scenario.comment.jane.postId })
    const trueComments = await db.comment.findMany({
      where: {
        postId: scenario.comment.jane.postId,
      },
    })

    expect(result.length).toEqual(trueComments.length)
  })

  scenario('postOnly', 'creates a new comment', async (scenario) => {
    const comment = await createComment({
      input: {
        name: 'Billy Bob',
        body: 'What is your favorite tree bark?',
        postId: scenario.post.bark.id,
      },
    })

    expect(comment.name).toEqual('Billy Bob')
    expect(comment.body).toEqual('What is your favorite tree bark?')
    expect(comment.postId).toEqual(scenario.post.bark.id)
    expect(comment.createdAt).not.toEqual(null)
  })
})
