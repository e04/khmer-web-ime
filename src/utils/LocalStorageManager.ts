export default class LocalStorageManager {
    constructor(private readonly KEY: string) {}

    load(): string | null {
        return localStorage.getItem(this.KEY)
    }

    save(data: string): void {
        localStorage.setItem(this.KEY, data)
    }
}
