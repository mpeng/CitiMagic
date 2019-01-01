
export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}

export const secondAction = () => dispatch => {
    dispatch({
        type: 'SECOND_ACTION',
        payload: 'result_of_second_action'
    })
}