import {generateMovement} from "../../../src/utilities/move/generateMovement";

describe('generateMovement', () => {
    it('should be able to go north', () => {
        expect(generateMovement(0, 0, 'N')).toEqual({
            x: 0,
            y: 1,
            direction: 'N'
        })
    })

    it('should be able to go south', () => {
        expect(generateMovement(0, 1, 'S')).toEqual({
            x: 0,
            y: 0,
            direction: 'S'
        })
    })

    it('should be able to go west', () => {
        expect(generateMovement(1, 0, 'W')).toEqual({
            x: 0,
            y: 0,
            direction: 'W'
        })
    })

    it('should be able to go east', () => {
        expect(generateMovement(0, 0, 'E')).toEqual({
            x: 1,
            y: 0,
            direction: 'E'
        })
    })

    it('should fail when another direction is set', () => {
        expect(() => generateMovement(0, 0, 'X')).toThrowError('Unexpected direction')
    })
})
