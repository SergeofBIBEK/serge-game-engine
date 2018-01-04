export default class Utils {
    isMobileDevice() {
        var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return !!navigator.userAgent.match(r);
    };

    clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }

    padZero(string, length) {

        while (string.length < length) {
            string = '0' + string;
        }

        return string;
    }

    randomInt(max) {
        return Math.floor(max * Math.random());
    }

    isMobileSafari() {
        var agent = navigator.userAgent;
        return !!(agent.match(/iPhone|iPad|iPod/) && agent.match(/AppleWebKit/) &&
            !agent.match('CriOS'));
    }

    isAndroidChrome() {
        var agent = navigator.userAgent;
        return !!(agent.match(/Android/) && agent.match(/Chrome/));
    }

}