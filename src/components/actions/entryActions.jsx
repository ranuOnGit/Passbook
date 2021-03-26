export const addEntry = ( entry ) => {
    return{type: 'ADD_ENTRY', entry}
}


export const deleteEntry = (id) => {
  return { type: 'DELETE_ENTRY', id }
}
