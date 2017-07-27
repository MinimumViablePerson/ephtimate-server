'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _immutable = require('immutable');

var _helpers = require('./helpers');

var task = function task() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)();
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_TASK':
            return (0, _helpers.addTask)(state, action.title);
        case 'VOTE':
            return (0, _helpers.vote)(state, action.estimate, action.hasVoted);
        case 'ESTIMATE':
            return (0, _immutable.Map)();
        default:
            return state;
    }
};

exports.default = task;