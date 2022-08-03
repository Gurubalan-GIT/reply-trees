import { v4 as uuidV4 } from 'uuid'

export const user = {
  id: uuidV4(),
  name: uuidV4(),
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYDq9m3su-mHwoAz5sWjXyqqSKFu5SMYlVGYj4QPKBalBwmHWr8LtdRu_yo6iPOLmBxQ&usqp=CAU',
}

export const data = {
  comments: [
    {
      key: uuidV4(),
      body: 'This is a root comment',
      user,
      children: [
        { key: uuidV4(), body: 'This is a test comment', user },
        { key: uuidV4(), body: 'This is a test comment', user },
        { key: uuidV4(), body: 'This is a test comment', user },
        { key: uuidV4(), body: 'This is a test comment', user },
      ],
    },
    {
      key: uuidV4(),
      body: 'This is a root comment',
      user,
      children: [
        {
          key: uuidV4(),
          body: 'This is a test comment',
          user,
          children: [
            { key: uuidV4(), body: 'This is a test comment', user },
            { key: uuidV4(), body: 'This is a test comment', user },
          ],
        },
        { key: uuidV4(), body: 'This is a test comment', user },
        { key: uuidV4(), body: 'This is a test comment', user },
        { key: uuidV4(), body: 'This is a test comment', user },
      ],
    },
    {
      key: uuidV4(),
      body: 'This is a root comment',
      user,
      children: [
        { key: uuidV4(), body: 'This is a test comment', user },
        { key: uuidV4(), body: 'This is a test comment', user },
        { key: uuidV4(), body: 'This is a test comment', user },
        { key: uuidV4(), body: 'This is a test comment', user },
      ],
    },
    {
      key: uuidV4(),
      body: 'This is a root comment',
      user,
      children: [
        { key: uuidV4(), body: 'This is a test comment', user },
        { key: uuidV4(), body: 'This is a test comment', user },
        { key: uuidV4(), body: 'This is a test comment', user },
        { key: uuidV4(), body: 'This is a test comment', user },
      ],
    },
  ],
}
