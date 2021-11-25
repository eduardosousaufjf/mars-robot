import Circular from "../structures/CircularArray";

/**
 * Rotates the current direction using the command (L|R)
 * @param currentDirection
 * @param command
 */
const rotate = (currentDirection: string, command: string): string => {
    const directions = ['N', 'E', 'S', 'W']
    let currentDirectionPosition = directions.indexOf(currentDirection)
    const circularDirections = new Circular(directions, currentDirectionPosition)
    if (command === 'L') {
        return circularDirections.prev()
    }
    return circularDirections.next()
};

export {rotate}
