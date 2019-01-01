export default ( state = {}, action) => {
    switch (action.type ) {
        case 'SIMPLE_ACTION':
       //     return { result: action.payload }
            return Object.assign({}, state, { payload: state.payload + " A" })
        default: return state    
    }

}