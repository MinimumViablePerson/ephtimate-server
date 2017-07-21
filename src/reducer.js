import {addTask, vote, estimate, INITIAL_STATE} from './core'

export default function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
    case 'ADD_TASK':
        return addTask(state, action.title)
    case 'VOTE':
        return vote(state, action.estimate)
    case 'ESTIMATE':
        return estimate(state, action.estimate)
    default:
        return state
    }
}