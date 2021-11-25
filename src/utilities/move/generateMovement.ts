import IPosition from "../../interfaces/IPosition";
import {generatePositionObject} from "../adapters/generatePositionObject";

/**
 * Generates movement towards a direction
 * @param x
 * @param y
 * @param direction
 */
const generateMovement = (x: number, y: number, direction: string): IPosition => {
    switch (direction) {
        case 'N':
            y = y + 1
            break
        case 'E':
            x = x + 1
            break
        case 'S':
            y = y - 1
            break
        case 'W':
            x = x - 1
            break
        default:
            throw Error('Unexpected direction')
    }
    return generatePositionObject(x, y, direction)
}

export {generateMovement}
