import {MarsField} from "../../interfaces/MarsField";

/**
 * Leaves a scent for other robots
 * @param map
 * @param x
 * @param y
 * @param direction
 */
const leaveScent = (map: MarsField, x: number, y: number, direction: string): void => {
    map[x][y] = direction
}

/**
 * Checks if the map contains a robot scent in the coordinate
 * @param map
 * @param x
 * @param y
 * @param direction
 */
const hasScent = (map: MarsField, x: number, y: number, direction: string): boolean => {
    return map?.[x]?.[y] === direction
}

export {leaveScent, hasScent}
