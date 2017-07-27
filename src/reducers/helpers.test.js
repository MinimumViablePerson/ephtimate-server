import {fromJS, Map, List} from 'immutable'

import {addTask, vote} from './helpers'

describe('application logic', () => {

    describe('addTask', () => {

        it('adds a new task to the state', () => {
            const state = Map()
            const title = 'Fix stuff'
            const nextState = addTask(state, title)

            expect(nextState).toEqual(Map({
                title: 'Fix stuff'
            }))
        })

        it('does not add a task if there is one already', () =>{
            const state = Map({
                title: 'Fix stuff'
            })
            const title = 'Fix more stuff'
            const nextState = addTask(state, title)

            expect(nextState).toEqual(Map({
                title: 'Fix stuff'
            }))
        })

    })

    describe('vote', () => {

        it('adds a new tally', () => {
            const state = Map({
                title: 'Fix stuff'
            })
            const nextState = vote(state, 8)

            expect(nextState).toEqual(fromJS({
                title: 'Fix stuff',
                tally: {
                    8: 1
                }
            }))
        })

        it('adds 1 to an existing tally', () => {
            const state = fromJS({
                title: 'Fix stuff',
                tally: {
                    8: 1,
                    13: 1
                }
            })
            const nextState = vote(state, 8)

            expect(nextState).toEqual(fromJS({
                    title: 'Fix stuff',
                    tally: {
                        8: 2,
                        13: 1
                    }
            }))
        })

        it('returns state if there is no task', () => {
            const state = Map()
            const nextState = vote(state, 8)

            expect(nextState).toEqual(state)
        })

    })

})