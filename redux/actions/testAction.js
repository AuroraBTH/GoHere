export function addText(text) {
    return function(dispatch){
        /** 
         * Do what the fack you want.
         */
        dispatch({ type: 'ADD_TEXT', payload: text})
    }
}