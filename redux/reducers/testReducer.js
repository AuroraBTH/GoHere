export default function reducer(state = {
    /**
     * The store or whatnot, sparade variablar.
     */
    text: 'Wat a fakin text',
}, action) {

    switch (action.type) {
        case 'ADD_TEXT': {
            return { ...state, text: action.payload}
        }
        default: {
            return { ...state}
        }
    }
}
