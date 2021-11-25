import IPosition from "../../interfaces/IPosition";

/**
 * Generates a standard communication object
 * @param x
 * @param y
 * @param direction
 */
const generatePositionObject = (x: number, y: number, direction: string): IPosition => ({
    x, y, direction
})

export {generatePositionObject}
