import { KeyMap, KeyTranslator } from './interface'

export default class KeyMapper implements KeyTranslator {
    constructor(private keyMap: KeyMap) {}

    translate(event: KeyboardEvent): string {
        if (!(event.code in this.keyMap)) return ''

        let willSend: string | undefined

        willSend = this.keyMap[event.code].only
        if (event.shiftKey) {
            willSend = this.keyMap[event.code].shift
        }
        return willSend ?? ''
    }
}
