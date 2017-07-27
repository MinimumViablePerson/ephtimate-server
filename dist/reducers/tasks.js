'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _immutable = require('immutable');

var tasks = function tasks() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)();
    var action = arguments[1];

    switch (action.type) {
        case 'ESTIMATE':
            return state.push((0, _immutable.Map)({
                title: action.title,
                estimate: action.estimate
            }));
        default:
            return state;
    }
};

exports.default = tasks;