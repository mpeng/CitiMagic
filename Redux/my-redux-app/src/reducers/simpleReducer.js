const initialState = {
    payload: "Intial State"
}

export default ( state = initialState, action) => {
    switch (action.type ) {
        case 'SIMPLE_ACTION':
            return Object.assign({}, state, { payload: state.payload + " A" })
        default: return state    
    }

}