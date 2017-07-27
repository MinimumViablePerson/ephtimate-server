'use strict';

var _immutable = require('immutable');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('reducer', function () {

    it('handles ADD_TASK', function () {
        var initialState = (0, _immutable.fromJS)({
            tasks: [],
            task: {},
            revealed: false
        });
        var action = { type: 'ADD_TASK', title: 'Fix stuff' };
        var nextState = (0, _reducer2.default)(initialState, action);

        expect(nextState).toEqual((0, _immutable.fromJS)({
            tasks: [],
            task: {
                title: 'Fix stuff'
            },
            revealed: false
        }));
    });

    it('handles VOTE', function () {
        var initialState = (0, _immutable.fromJS)({
            tasks: [],
            task: {
                title: 'Fix stuff'
            },
            revealed: false
        });
        var action = { type: 'VOTE', estimate: 3 };
        var nextState = (0, _reducer2.default)(initialState, action);

        expect(nextState).toEqual((0, _immutable.fromJS)({
            tasks: [],
            task: {
                title: 'Fix stuff',
                tally: {
                    3: 1
                }
            },
            revealed: false
        }));
    });

    it('handles REVEAL', function () {
        var initialState = (0, _immutable.fromJS)({
            tasks: [],
            task: {
                title: 'Fix stuff',
                tally: {
                    3: 1
                }
            },
            revealed: false
        });
        var action = { type: 'REVEAL' };
        var nextState = (0, _reducer2.default)(initialState, action);

        expect(nextState).toEqual((0, _immutable.fromJS)({
            tasks: [],
            task: {
                title: 'Fix stuff',
                tally: {
                    3: 1
                }
            },
            revealed: true
        }));
    });

    it('handles ESTIMATE', function () {
        var initialState = (0, _immutable.fromJS)({
            tasks: [],
            task: {
                title: 'Fix stuff',
                tally: {
                    3: 1
                }
            },
            revealed: false
        });
        var action = { type: 'ESTIMATE', estimate: 3, title: 'Fix stuff' };
        var nextState = (0, _reducer2.default)(initialState, action);

        expect(nextState).toEqual((0, _immutable.fromJS)({
            tasks: [{
                title: 'Fix stuff',
                estimate: 3
            }],
            task: {},
            revealed: false
        }));
    });
});