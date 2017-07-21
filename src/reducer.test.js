import {fromJS} from 'immutable'

import reducer from './reducer'

describe('reducer', () => {

    it('handles ADD_TASK', () => {
        const initialState = fromJS({
            tasks: []
        })
        const action = {type: 'ADD_TASK', title: 'Fix stuff'}
        const nextState = reducer(initialState, action)

        expect(nextState).toEqual(fromJS({
            tasks: [],
            task: {
                title: 'Fix stuff'
            }
        }))
    })

    it('handles VOTE', () => {
        const initialState = fromJS({
            tasks: [],
            task: {
                title: 'Fix stuff'
            }
        })
        const action = {type: 'VOTE', estimate: 3}
        const nextState = reducer(initialState, action)

        expect(nextState).toEqual(fromJS({
            tasks: [],
            task: {
                title: 'Fix stuff',
                tally: {
                    3: 1
                }
            }
        }))
    })

    it('handles ESTIMATE', () => {
        const initialState = fromJS({
            tasks: [],
            task: {
                title: 'Fix stuff',
                tally: {
                    3: 1
                }
            }
        })
        const action = {type: 'ESTIMATE', estimate: 3}
        const nextState = reducer(initialState, action)

        expect(nextState).toEqual(fromJS({
            tasks: [
                {
                    title: 'Fix stuff',
                    estimate: 3
                }
            ]
        }))
    })

})