export interface KeyTranslator {
    translate: (event: KeyboardEvent) => string
}

export type KeyButton = {
    only: string
    shift?: string
}

export type KeyMap = {
    [key: string]: KeyButton
}
