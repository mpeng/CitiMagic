const initialState = {
    payload: "Intial state"
}

export default ( state = initialState, action) => {
    switch (action.type ) {
        case 'SIMPLE_ACTION':
            return Object.assign({}, state, { payload: state.payload + " A" })
        case 'SECOND_ACTION':
            return Object.assign({}, state, { payload: state.payload + " B" })
        default: return state    
    }

}