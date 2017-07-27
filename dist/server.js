'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.startServer = startServer;

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _store = require('./store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startServer(store) {
    var io = new _socket2.default().attach(process.env.PORT || 8027);

    store.subscribe(function () {
        console.log(store.getState());
        io.emit('state', store.getState().toJS());
    });

    io.on('connection', function (socket) {
        socket.emit('state', store.getState().toJS());
        socket.on('action', store.dispatch.bind(store));
    });
}