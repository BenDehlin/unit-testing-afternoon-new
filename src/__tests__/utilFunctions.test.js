import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('shortenText should not alter a string with less than 100 characters', () => {
  expect(shortenText(shortText)).toHaveLength(29)
})
test('shortenText shortens text over 100 characters and adds 3 periods at the end', () => {
  const shortenedText = shortenText(longText)
  expect(shortenedText).not.toHaveLength(longText.length)
  expect(shortenedText.slice(-3)).toBe('...')
})

test('wordCount counts words in post array', () => {
  expect(wordCount(posts)).toBe(233)
})

test('attachUserName first post has property displayName', () => {
  const newPosts = attachUserName(users, posts)
  expect(newPosts[0]).toHaveProperty('displayName')
})