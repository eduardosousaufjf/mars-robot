import generateMap from "../../../src/utilities/generateMap";
import {hasScent, leaveScent} from "../../../src/utilities/move/scent";

describe('scent', () => {

    describe('hasScent', () => {
        const map = generateMap(2, 2)

        it('should not have scent in a clear map', () => {
            expect(hasScent(map, 0, 0)).toBe(false)
            expect(hasScent(map, 0, 1)).toBe(false)
            expect(hasScent(map, 1, 0)).toBe(false)
            expect(hasScent(map, 1, 1)).toBe(false)
            expect(hasScent(map, 1, 2)).toBe(false)
            expect(hasScent(map, 2, 1)).toBe(false)
            expect(hasScent(map, 2, 2)).toBe(false)
        })
    })

    describe('leaveScent', () => {
        const map = generateMap(2, 2)

        leaveScent(map, 0, 0)
        expect(hasScent(map, 0, 0)).toBe(true)
    })


})
