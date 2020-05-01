const isPC =
    window.navigator.userAgent.search(
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i
    ) === -1
const isChrome = !!navigator.userAgent.match('Chrome')
const isSafari = !!navigator.userAgent.match('Safari')
const isNewEdge = !!navigator.userAgent.match('Edg')
export const isCompatible = isPC && (isChrome || isNewEdge || isSafari)
