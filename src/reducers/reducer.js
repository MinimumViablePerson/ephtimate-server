import {combineReducers} from 'redux-immutable'
import {Map} from 'immutable'

import task from './task'
import tasks from './tasks'
import revealed from './revealed'

const reducer = combineReducers({
    task,
    tasks,
    revealed
})

export default reducer
