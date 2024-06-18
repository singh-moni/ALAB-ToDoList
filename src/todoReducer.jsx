export const initialState = [
    {
      "userId": 1,
      "id": 1,
      "title": "Reading ",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "Coding",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "Cooking",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "Teaching Kids",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "Dinner",
      "completed": false
    }
  ];
  
  export const ACTIONS = {
    ADD_TODO: 'add-todo',
    DELETE_TODO: 'delete-todo',
    TOGGLE_COMPLETE: 'toggle-complete',
    EDIT_TODO: 'edit-todo'
  };
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [{ id: state.length + 1, title: action.payload, completed: false }, ...state];
      case ACTIONS.DELETE_TODO:
        return state.filter((todo) => todo.id !== action.payload);
      case ACTIONS.TOGGLE_COMPLETE:
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        );
      case ACTIONS.EDIT_TODO:
        return state.map((todo) =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.newTitle } : todo
        );
      default:
        return state;
    }
  };