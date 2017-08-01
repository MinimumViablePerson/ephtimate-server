import {Map, List} from 'immutable'

const tasks = (state=List(), action) => {
    switch (action.type) {
    case 'ESTIMATE':
        return state.push(Map({
            title: action.title,
            estimate: action.estimate
        }))
    case 'CLEAR_TASKS':
        return List()
    default:
        return state
    }
}

export default tasks
