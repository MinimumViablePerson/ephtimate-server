'use strict';

var _immutable = require('immutable');

var _helpers = require('./helpers');

describe('application logic', function () {

    describe('addTask', function () {

        it('adds a new task to the state', function () {
            var state = (0, _immutable.Map)();
            var title = 'Fix stuff';
            var nextState = (0, _helpers.addTask)(state, title);

            expect(nextState).toEqual((0, _immutable.Map)({
                title: 'Fix stuff'
            }));
        });

        it('does not add a task if there is one already', function () {
            var state = (0, _immutable.Map)({
                title: 'Fix stuff'
            });
            var title = 'Fix more stuff';
            var nextState = (0, _helpers.addTask)(state, title);

            expect(nextState).toEqual((0, _immutable.Map)({
                title: 'Fix stuff'
            }));
        });
    });

    describe('vote', function () {

        it('adds a new tally', function () {
            var state = (0, _immutable.Map)({
                title: 'Fix stuff'
            });
            var nextState = (0, _helpers.vote)(state, 8);

            expect(nextState).toEqual((0, _immutable.fromJS)({
                title: 'Fix stuff',
                tally: {
                    8: 1
                }
            }));
        });

        it('adds 1 to an existing tally', function () {
            var state = (0, _immutable.fromJS)({
                title: 'Fix stuff',
                tally: {
                    8: 1,
                    13: 1
                }
            });
            var nextState = (0, _helpers.vote)(state, 8);

            expect(nextState).toEqual((0, _immutable.fromJS)({
                title: 'Fix stuff',
                tally: {
                    8: 2,
                    13: 1
                }
            }));
        });

        it('returns state if there is no task', function () {
            var state = (0, _immutable.Map)();
            var nextState = (0, _helpers.vote)(state, 8);

            expect(nextState).toEqual(state);
        });
    });
});