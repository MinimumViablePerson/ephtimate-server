'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var revealed = function revealed() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_TASK':
            return false;
        case 'REVEAL':
            return true;
        case 'ESTIMATE':
            return false;
        default:
            return state;
    }
};

exports.default = revealed;