import {MarsField} from "../interfaces/MarsField";
import move from "./move/move";

/**
 * Execute the array of commands of a single robot given a map and a initial position
 * @param map
 * @param initialPosition
 * @param commands
 */
const executeSingleRobot = (map: MarsField, initialPosition: Array<string>, commands: Array<string>) => {
    let [currentXString, currentYString, currentDirection] = initialPosition
    let currentX = parseInt(currentXString)
    let currentY = parseInt(currentYString)
    try {
        commands.forEach(command => {
            const {x, y, direction} = move(map, currentX, currentY, currentDirection, command)
            currentX = x
            currentY = y
            currentDirection = direction
        })
        console.log(`${currentX} ${currentY} ${currentDirection}`)
    } catch (e) {
        console.log(`${currentX} ${currentY} ${currentDirection} LOST`)
    }
}

export default executeSingleRobot
