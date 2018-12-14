import { AsyncStorage } from "react-native"
/**
 * We will use async data to store data into the phones storage.
 */

export const addPinToRoute = (coords, title) => {
    return function (dispatch) {
        ( async () => {
            try {
                const pinsCoords = {
                    [title]: {
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    } 
                }

                const existingRoute = await AsyncStorage.getItem('route')
                let newRoute = JSON.parse(existingRoute);
                if (!newRoute) {
                    newRoute = []
                }
                
                newRoute.push(pinsCoords)

                function testSome(obj) {
                    return Object.keys(obj)[0] === title
                }

                let checkIfExist = newRoute.findIndex(testSome)
                console.log(checkIfExist);
                /**
                 * TO FIX HERE, if checkifexists is -1, then add
                 */
                await newRoute.push(pinsCoords)

                await AsyncStorage.setItem('route', JSON.stringify(newRoute))
                    .then(() => {
                        console.log('It was saved')
                    })
                    .catch(() => {
                        console.log('Somes fucked up')
                    })
            } catch (error) {
                console.warn(error)
            }
        })()
    }
}


// {
//     route: [
//         {
//             lat: 151513513,
//             lng: 13513513513,
//         },
//         {
//             lat: 151513513,
//             lng: 13513513513,
//         }
        
//     ]
// }
