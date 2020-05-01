import { KeyTranslator } from './keyMaps/interface'
import { WordSearcher } from './wordList/WordSearcher'

export default class LanguageService {
    constructor(
        readonly keyTranslator: KeyTranslator,
        readonly wordSearcher: WordSearcher
    ) {}
}
