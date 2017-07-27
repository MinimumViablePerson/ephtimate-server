import {createStore} from 'redux'
import reducer from './reducers/reducer'

export function makeStore() {
    return createStore(reducer)
}
