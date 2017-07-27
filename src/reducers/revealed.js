const revealed = (state=false, action) => {
    switch (action.type) {
    case 'ADD_TASK':
        return false
    case 'REVEAL':
        return true
    case 'ESTIMATE':
        return false
    default:
        return state
    }
}

export default revealed
