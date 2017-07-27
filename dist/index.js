'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _store = require('./store');

var _server = require('./server');

var store = exports.store = (0, _store.makeStore)();
(0, _server.startServer)(store);