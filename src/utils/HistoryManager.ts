export default class HistoryManager<T> {
    private array: T[] = []
    private position = 0

    push(item: T): void {
        if (this.position !== this.array.length - 1) {
            this.array = this.array.slice(0, this.position)
        }
        this.position = this.array.push(item)
    }

    undo(): T | null {
        if (this.position - 1 === -1) return null
        this.position--
        return this.array[this.position]
    }

    redo(): T | null {
        if (this.position === this.array.length - 1) return null
        this.position++
        return this.array[this.position]
    }
}
