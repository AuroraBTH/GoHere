const key = require('../../config/keys.json')

export function submitSearch(text) {
    return function (dispatch) {
        ( async () => {
            try {
                let response = await fetch(
                    'https://maps.googleapis.com/maps/api/place/textsearch/json?' +
                    'key=' + key["google_maps"] +
                    "&query=" + text,
                )

                let responseJson = await response.json()
                let returnResponse = []

                responseJson.results.map(result => {
                    let location = {
                        name: result.name,
                        address: result.formatted_address,
                        location: result.geometry
                    }

                    returnResponse.push(location)
                })

                await dispatch({ type: 'ADD_RESULT_ARRAY', payload: returnResponse })
            } catch (error) {
                console.error(error)
            }
        })()
    }
}