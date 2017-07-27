export function addTask(state, title) {
    if (state.has('title')) {
        return state
    }
    return state.set('title', title)
}

export function vote(state, estimate, hasVoted) {
    if (!state.has('title') || !estimate) {
        return state
    }
    const updatedState =  state.updateIn(
        ['tally', estimate.toString()],
        0,
        tally => tally + 1
    )

    return hasVoted ?
        updatedState.updateIn(
            ['tally', hasVoted.toString()],
            0,
            tally => (tally < 2) ? null : tally - 1
        ) :
        updatedState

}
