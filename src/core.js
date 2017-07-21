import {fromJS, Map, List} from 'immutable'

export function addTask(state, title) {
    if (state.has('task')) {
        return state
    }
    return state.setIn(['task', 'title'], title)
}

export function vote(state, entry) {
    if (!state.has('task')) {
        return state
    }
    return state.updateIn(
        ['task', 'tally', entry.toString()],
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