const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hi, how are you?' },
    { id: 3, message: 'Yo, cool' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
    { id: 6, message: 'Yo' },
    { id: 7, message: 'Yo' }
  ],

  dialogs: [
    { id: 1, name: 'Saha' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Valya' },
    { id: 4, name: 'Olya' },
    { id: 5, name: 'Sergey' },
    { id: 6, name: 'Stas' },
    { id: 7, name: 'Lesha' }
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let body = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 8, message: body }]
      }
    default:
      return state;
  }
}

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });


export default dialogsReducer;