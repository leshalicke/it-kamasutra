import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {

    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', like: 9 },
        { id: 2, message: 'It\'s is my first post', like: 23 },
        { id: 3, message: 'Yo, cool', like: 67 },
        { id: 4, message: 'Yo', like: 9 },
        { id: 5, message: 'Yo', like: 0 },
        { id: 6, message: 'Yo', like: 8 },
        { id: 7, message: 'Yo', like: 4 },
      ],
  
      newPostText: '',
  
    },
  
    dialogsPage: {
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
      ],

      newMessageText: '',
    },
  
    sideBar: {
      
    }
  },
  _rerenderEntireTree () {
    console.log('State change')
  },
  

  subscribe (observer) {
      this._rerenderEntireTree = observer;
  },
  getState () {
    return this._state;
  },


  dispatch (action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._rerenderEntireTree(this._state);

  },

};


export default store;
