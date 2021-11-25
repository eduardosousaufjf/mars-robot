import {MarsField} from "../../interfaces/MarsField";

/**
 * Checks whether x and y are out of boundaries or not
 * @param map
 * @param x
 * @param y
 */
const isOutOfBoundaries = (map: MarsField, x: number, y: number): boolean => {
    return map?.[x]?.[y] === undefined
}

export {isOutOfBoundaries}
