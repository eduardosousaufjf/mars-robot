import Circular from "../../../src/utilities/structures/CircularArray";

describe('CircularArray', () => {
    it('should be able to go from first to last', () => {
        const circular = new Circular([1, 2, 3])
        expect(circular.prev()).toBe(3)
    })

    it('should be able to go from last to first', () => {
        const circular = new Circular([1, 2, 3], 2)
        expect(circular.next()).toBe(1)
    })

    it('should be able to to the next position', () => {
        const circular = new Circular([1, 2, 3])
        expect(circular.next()).toBe(2)
    })

    it('should be able to to the previous position', () => {
        const circular = new Circular([1, 2, 3],1)
        expect(circular.prev()).toBe(1)
    })
})
