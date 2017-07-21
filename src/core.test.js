import {fromJS, Map, List} from 'immutable'

import {addTask, vote, estimate} from './core'

describe('application logic', () => {

    describe('addTask', () => {

        it('adds a new task to the state', () => {
            const state = fromJS({
                tasks: []
            })
            const task = 'Fix stuff'
            const nextState = addTask(state, task)

            expect(nextState).toEqual(fromJS({
                tasks: [],                
                task: {
                    title: 'Fix stuff'
                }
            }))
        })

        it('does not add a task if there is one already', () =>{
            const state = fromJS({
                tasks: [],                
                task: {
                    title: 'Fix stuff'
                }
            })
            const title = 'Fix more stuff'
            const nextState = addTask(state, title)

            expect(nextState).toEqual(fromJS({
                tasks: [],                
                task: {
                    title: 'Fix stuff'
                }
            }))
        })

    })

    describe('vote', () => {

        it('adds a new tally', () => {
            const state = fromJS({
                tasks: [],                
                task: {
                    title: 'Fix stuff'
                }
            })
            const nextState = vote(state, 8)

            expect(nextState).toEqual(fromJS({
                tasks: [],                
                task: {
                    title: 'Fix stuff',
                    tally: {
                        8: 1
                    }
                }
            }))
        })

        it('adds 1 to an existing tally', () => {
            const state = fromJS({
                tasks: [],                
                task: {
                    title: 'Fix stuff',
                    tally: {
                        8: 1,
                        13: 1
                    }
                }
            })
            const nextState = vote(state, 8)

            expect(nextState).toEqual(fromJS({
                tasks: [],                
                task: {
                    title: 'Fix stuff',
                    tally: {
                        8: 2,
                        13: 1
                    }
                }
            }))
        })

        it('returns state if there is no task', () => {
            const state = fromJS({
                tasks: []
            })
            const nextState = vote(state, 8)

            expect(nextState).toEqual(fromJS({
                tasks: []
            }))
        })

    })

    describe('completeEstimation', () => {

        it('adds an estimated task into the tasks list', () => {
            const state = fromJS({
                tasks: [],                
                task: {
                    title: 'Fix stuff',
                    tally: {
                        8: 2,
                        13: 1
                    }
                }
            })
            const nextState = estimate(state, 8)

            expect(nextState).toEqual(fromJS({
                tasks: [
                    {
                        title: 'Fix stuff',
                        estimate: 8
                    }
                ]
            }))
        })

    })

})