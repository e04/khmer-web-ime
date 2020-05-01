import LanguageService from '../../LanguageService'
import KeyMapper from '../../keyMaps/KeyMapper'
import { keyMap } from './keyMap'
import { WordSearcher } from '../../wordList/WordSearcher'
import { wordList } from './wordList'
import { dictionary } from './dictionary'
export const languageService = new LanguageService(
    new KeyMapper(keyMap),
    new WordSearcher(wordList, dictionary)
)
