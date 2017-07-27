'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxImmutable = require('redux-immutable');

var _immutable = require('immutable');

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

var _tasks = require('./tasks');

var _tasks2 = _interopRequireDefault(_tasks);

var _revealed = require('./revealed');

var _revealed2 = _interopRequireDefault(_revealed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _reduxImmutable.combineReducers)({
    task: _task2.default,
    tasks: _tasks2.default,
    revealed: _revealed2.default
});

exports.default = reducer;