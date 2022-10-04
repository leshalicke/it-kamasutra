import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', like: 9 },
    { id: 2, message: 'It\'s is my first post', like: 23 },
    { id: 3, message: 'Yo, cool', like: 67 },
    { id: 4, message: 'Yo', like: 9 },
    { id: 5, message: 'Yo', like: 0 }
  ]
};

test('new post', () => {
  let action = addPostActionCreator('it-kama');

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(6);
});

test('after deleting length of massages should be decrement', () => {
  let action = deletePost(1);


  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});



