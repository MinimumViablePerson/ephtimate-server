import {Map} from 'immutable'

import {addTask, vote} from './helpers'

const task = (state=Map(), action) => {
    switch (action.type) {
    case 'ADD_TASK':
        return addTask(state, action.title)
    case 'VOTE':
        return vote(state, action.estimate, action.hasVoted)
    case 'ESTIMATE':
        return Map()
    case 'CANCEL_TASK':
        return Map()
    default:
        return state
    }
}

export default task
