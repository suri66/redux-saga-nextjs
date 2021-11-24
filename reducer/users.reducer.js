// action types
const FETCH_USERS = "FETCH_USERS";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  users: [],
  error: null
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, fetching: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, fetching: false, users: action.users };
    case FETCH_USERS_FAILURE:
      return { ...state, fetching: false, users: [], error: action.error };
    default:
      return state;
  }
}