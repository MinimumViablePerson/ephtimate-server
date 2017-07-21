import {fromJS, Map} from 'immutable'

export const INITIAL_STATE = fromJS({
    tasks: []
})

export function addTask(state=INITIAL_STATE, title) {
    if (state.has('task')) {
        return state
    }
    return state.setIn(['task', 'title'], title)
}

export function vote(state, estimate) {
    if (!state.has('task')) {
        return state
    }
    return state.updateIn(
        ['task', 'tally', estimate.toString()],
        0,
        tally => tally + 1
    )
}

export function estimate(state, estimate) {
    const title = state.getIn(['task', 'title'])
    
    return state.update('tasks', tasks => tasks.push(
                    Map({
                        title: title,
                        estimate: estimate
                    })
                ))
                .remove('task')
                
                
}