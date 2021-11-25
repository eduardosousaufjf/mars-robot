import {rotate} from "../../../src/utilities/move/rotate";

describe('rotate', () => {
    it('should be able to rotate left', () => {
        expect(rotate('N', 'L')).toBe('W')
    })

    it('should be able to rotate right', () => {
        expect(rotate('N', 'R')).toBe('E')
    })
})
