import generateMap from "../../src/utilities/generateMap";

describe('generateMap', () => {
    it('should be able to initialize a map', () => {
        const map = generateMap(2, 2)
        expect(map[0][0]).toBe(0)
        expect(map[0][1]).toBe(0)
        expect(map[1][0]).toBe(0)
        expect(map[1][1]).toBe(0)
        expect(map[2][0]).toBe(0)
        expect(map[2][1]).toBe(0)
        expect(map[2][2]).toBe(0)
        expect(map[0][2]).toBe(0)
        expect(map[1][2]).toBe(0)
        expect(map?.[3]?.[2]).toEqual(undefined)
    })

    it('should not be able to create a map bigger than 50 X', () => {
        expect(() => generateMap(2, 51)).toThrowError('Coordinate exceeded limit')
    })

    it('should not be able to create a map bigger than 50 Y', () => {
        expect(() => generateMap(51, 3)).toThrowError('Coordinate exceeded limit')
    })

})
