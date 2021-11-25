import generateMap from "../../../src/utilities/generateMap";
import move from "../../../src/utilities/move/move";
import {hasScent, leaveScent} from "../../../src/utilities/move/scent";

describe('move', () => {
    const map = generateMap(2, 2)
    it('should rotate when command left is to rotate left', () => {
        const movement = move(map, 0, 0, 'N', 'L')
        expect(movement).toEqual({
            x: 0,
            y: 0,
            direction: 'W'
        })
    })

    it('should rotate right when command is to rotate right', () => {
        const movement = move(map, 0, 0, 'N', 'R')
        expect(movement).toEqual({
            x: 0,
            y: 0,
            direction: 'E'
        })
    })

    it('should go forward when the command is to go forward', () => {
        const movement = move(map, 0, 0, 'N', 'F')
        expect(movement).toEqual({
            x: 0,
            y: 1,
            direction: 'N'
        })
    })

    it('should leave scent and fail when it goes out of boundaries', () => {
        expect(() => move(map, 0, 0, 'S', 'F'))
            .toThrowError('Out of boundaries')
        expect(hasScent(map, 0, 0, 'S')).toBe(true)
    })

    it('should not leave mars when trying to leave by a scented coordinate', () => {
        void leaveScent(map, 2, 2, 'N')
        expect(move(map, 2, 2, 'N', 'F')).toEqual({
            x: 2,
            y: 2,
            direction: "N"
        })
    })

    it('should not go to a scented position', () => {
        expect(move(map, 0, 1, 'S', 'F'))
            .toEqual({
                x: 0,
                y: 1,
                direction: 'S'
            })
    })
})
