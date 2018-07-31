export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS'
}

/**
 * action creator
 */
export const correctGuess = () => {
    return { type: actionTypes.CORRECT_GUESS };
};
