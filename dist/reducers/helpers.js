'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addTask = addTask;
exports.vote = vote;
function addTask(state, title) {
    if (state.has('title')) {
        return state;
    }
    return state.set('title', title);
}

function vote(state, estimate, hasVoted) {
    if (!state.has('title') || !estimate) {
        return state;
    }
    var updatedState = state.updateIn(['tally', estimate.toString()], 0, function (tally) {
        return tally + 1;
    });

    return hasVoted ? updatedState.updateIn(['tally', hasVoted.toString()], 0, function (tally) {
        return tally < 2 ? null : tally - 1;
    }) : updatedState;
}