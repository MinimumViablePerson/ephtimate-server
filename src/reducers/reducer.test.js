import {fromJS} from 'immutable'

import reducer from './reducer'

describe('reducer', () => {

    it('handles ADD_TASK', () => {
        const initialState = fromJS({
            tasks: [],
            task: {},
            revealed: false
        })
        const action = {type: 'ADD_TASK', title: 'Fix stuff'}
        const nextState = reducer(initialState, action)

        expect(nextState).toEqual(fromJS({
            tasks: [],
            task: {
                title: 'Fix stuff'
            },
            revealed: false
        }))
    })

    it('handles VOTE', () => {
        const initialState = fromJS({
            tasks: [],
            task: {
                title: 'Fix stuff'
            },
            revealed: false
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
            },
            revealed: false
        }))
    })

    it('handles REVEAL', () => {
        const initialState = fromJS({
            tasks: [],
            task: {
                title: 'Fix stuff',
                tally: {
                    3: 1
                }
            },
            revealed: false
        })
        const action = {type: 'REVEAL'}
        const nextState = reducer(initialState, action)

        expect(nextState).toEqual(fromJS({
            tasks: [],
            task: {
                title: 'Fix stuff',
                tally: {
                    3: 1
                }
            },
            revealed: true
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
            },
            revealed: false
        })
        const action = {type: 'ESTIMATE', estimate: 3, title: 'Fix stuff'}
        const nextState = reducer(initialState, action)

        expect(nextState).toEqual(fromJS({
            tasks: [
                {
                    title: 'Fix stuff',
                    estimate: 3
                }
            ],
            task: {},
            revealed: false
        }))
    })

})
