/**
 * Circular Array
 */
class Circular {
    arr: Array<any> = [];
    currentIndex: number = 0

    constructor(arr: Array<any>, startIndex: number) {
        this.arr = arr;
        this.currentIndex = startIndex || 0
    }

    current() {
        return this.arr[this.currentIndex];
    }

    next() {
        const i = this.currentIndex, arr = this.arr;
        this.currentIndex = i < arr.length - 1 ? i + 1 : 0;
        return this.current();
    }

    prev() {
        const i = this.currentIndex, arr = this.arr;
        this.currentIndex = i > 0 ? i - 1 : arr.length - 1;
        return this.current();
    }

}

export default Circular
