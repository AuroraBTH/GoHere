export default function reducer(state = {
    resultArray: [],
}, action) {

    switch (action.type) {
        case 'ADD_RESULT_ARRAY': {
            return { ...state, resultArray: action.payload }
        }
        default: {
            return { ...state }
        }
    }
}
