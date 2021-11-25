import IPosition from "../../interfaces/IPosition";
import {MarsField} from "../../interfaces/MarsField";
import {hasScent, leaveScent} from './scent'
import {generatePositionObject} from "../adapters/generatePositionObject";
import {rotate} from "./rotate";
import {generateMovement} from "./generateMovement";
import {isOutOfBoundaries} from "./isOutOfBoundaries";

/**
 *
 * @param map The mars map
 * @param currentX Current X coordinate
 * @param currentY Current Y coordinate
 * @param currentDirection Current direction (N|S|E|W)
 * @param command Current command to move (F|R|L)
 */
const move = (map: MarsField, currentX: number, currentY: number, currentDirection: string, command: string): IPosition => {
    //Case is rotating
    if (['L', 'R'].indexOf(command) >= 0) return generatePositionObject(currentX, currentY, rotate(currentDirection, command))
    //Case is going forward
    const {x, y} = generateMovement(currentX, currentY, currentDirection)

    //Trying to leave mars
    if (isOutOfBoundaries(map, x, y)) {
        //If another robot already passed here it should not leave mars
        if (hasScent(map, currentX, currentY, currentDirection)) {
            return generatePositionObject(currentX, currentY, currentDirection)
        } else {
            leaveScent(map, currentX, currentY, currentDirection)
            throw new Error('Out of boundaries')
        }

    } else {
        //If position contains scent, robot should not go in there
        if (hasScent(map, x, y, currentDirection)) return generatePositionObject(currentX, currentY, currentDirection)
        return generatePositionObject(x, y, currentDirection)
    }
}

export default move
