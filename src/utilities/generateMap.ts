/**
 * Initializes a map based on the upper limit and the right limit.
 * @param upperLimit
 * @param rightLimit
 */
import {MarsField} from "../interfaces/MarsField";

const generateMap = (upperLimit: number, rightLimit: number): MarsField => {
    if (upperLimit > 50 || rightLimit > 50) throw Error('Coordinate exceeded limit')

    const map: MarsField = {};
    for (let i: number = 0; i <= rightLimit; i++) {
        map[i] = {}
        for (let j: number = 0; j <= upperLimit; j++) {
            map[i][j] = ''
        }
    }
    return map
}

export default generateMap
