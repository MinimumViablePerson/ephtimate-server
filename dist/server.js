'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PORT = undefined;
exports.startServer = startServer;

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _store = require('./store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = exports.PORT = 8027;

function startServer(store) {
    var io = new _socket2.default().attach(PORT);
    console.log('Listening on port: %d', PORT);

    store.subscribe(function () {
        console.log(store.getState());
        io.emit('state', store.getState().toJS());
    });

    io.on('connection', function (socket) {
        socket.emit('state', store.getState().toJS());
        socket.on('action', store.dispatch.bind(store));
    });
}