import { AsyncStorage } from "react-native"
/**
 * We will use async data to store data into the phones storage.
 * Guide followed: https://medium.com/@luisbajana/saving-objects-using-asyncstorage-2d8696275667
 */

export const addPinToRoute = (coords, title) => {
    return function (dispatch) {
        ( async () => {
            try {

                /**
                 * Structured object created with searched info.
                 */
                const pinsCoords = {
                    "key": title,
                    "title": title,
                    "coordinate": {
                        "latitude": coords.latitude,
                        "longitude": coords.longitude
                    }
                }

                /* Retrieves the current saved route */
                const existingRoute = await AsyncStorage.getItem('route')
                
                /* If the parsed object doens't exist, its created.. or? */
                let newRoute = JSON.parse(existingRoute);
                if (!newRoute) {
                    newRoute = []
                }
                
                
                /**
                 * Checks if the Searched place that is going to be added already exists in the memory.
                 * Return: Amount of times pin already exists. -1 for non existing
                 */
                function testSome(obj) {
                    return obj.key === title
                }
                let checkIfExist = newRoute.findIndex(testSome)
                

                /**
                 * This adds the pin to temp array, only if function above returned -1 (non existing in memory).
                 */
                if (checkIfExist === -1) {
                    await newRoute.push(pinsCoords)    
                }

                /**
                 * Adds the temparray as memory.
                 */
                await AsyncStorage.setItem('route', JSON.stringify(newRoute))
                    .then(() => {
                        console.log('It was saved')
                        // console.log(newRoute);
                        
                    })
                    .catch((err) => {
                        console.log('Somes fucked up')
                        console.error(err)
                    })
            } catch (error) {
                console.warn(error)
            }
        })()
    }
}