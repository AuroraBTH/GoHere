export default function reducer(state = {
    route: [],
}, action) {

    switch (action.type) {
        case 'ADD_TO_STORAGE': {
            return { ...state, resultArray: action.payload }
        }
        case 'RETRIEVE_ROUTE_STORAGE': {
            return { ...state, route: action.payload}
        }
        default: {
            return { ...state }
        }
    }
}
