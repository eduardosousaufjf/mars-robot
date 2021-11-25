import generateMap from "../../../src/utilities/generateMap";
import {isOutOfBoundaries} from "../../../src/utilities/move/isOutOfBoundaries";

describe('isOutOfBoundaries', () => {
    const map = generateMap(2, 2)

    it('should be out of boundaries when trying to access 3 3', () => {
        expect(isOutOfBoundaries(map, 3, 3)).toBe(true)
    })

    it('should be out of boundaries accessing 3 2', () => {
        expect(isOutOfBoundaries(map, 3, 2)).toBe(true)
    })

    it('should not be out of boundaries accessing 2 2', () => {
        expect(isOutOfBoundaries(map, 2, 2)).toBe(false)
    })

})
