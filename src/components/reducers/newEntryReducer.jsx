const initialState = []

export const newEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return [
        ...state,
        { ...action.entry, id: new Date().getTime().toString() },
      ]
    case 'DELETE_ENTRY':
      return state.filter((el) => {
        return el.id !== action.id
      })
    default:
      return state
  }
}
