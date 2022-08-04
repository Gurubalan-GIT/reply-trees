## Introduction

Custom Tree ( NAry ), Queue and Linked List structure based comments and replies.

<img src="https://github.com/Gurubalan-GIT/reply-trees/blob/master/public/assets/img.png" />

## Problem statement

As you can see, we are trying to execute operations on deep nested comments and replies.

### [Services](/utils/services)

- Comments `extends` a Queue
- Comment `extends` an NAry Tree

- **Core** :
  - Queue `extends` Linked List
  - NAryTree has a *key* and *children*, where children is a `Queue`

### Rendering

During rendering, we convert our comments to an array and recursively render the components to build the entire layout out.

### Operations on CRUD

- If we were to use arrays, this is going to be incredibly expensive for deep nested comment operations.
- If we were to recursively solve this, this would result in an expensive computation as well.

This is where we use data structures to solve time complexity issues.
Each comment has a reference to it's root comment tree and it's subsequent parent comment tree's `key`.

This essentially helps us to find out the instances of both and perform CRUD operations incredibly easily at the same time being performant.

## State management 

This is tied together by [Rematch](https://rematchjs.org/), you can see the state operations [here](/utils/rematch).
