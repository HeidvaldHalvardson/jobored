const GET_FILTER = "GET_FILTER"

const defaultState = {
  catalog: []
}

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_FILTER:
      return {
        ...state,
        catalog: action.payload
      };
    default: return state
  }
}

export const setFilter = (catalog) => ({type: GET_FILTER, payload: catalog})