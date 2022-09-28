window.onload = function () {
    // 1. 브라우저에 따른 XMLHttpRequest 생성
    let xmlHttp = createXMLHTTPObject();
}

// 1. 브라우저에 따른 XMLHttpRequest 생성
function createXMLHTTPObject() {
    let xhr = null;
    if (window.XMLHttpRequest) {
        // IE7+, 크롬, 사파리, 파폭, 오페라는 XMLHttpRequest 객체를 제공합니다.
        xhr = new XMLHttpRequest();
    } else {        // IE5,6 버전에서는 다음과 같은 방법으로 XMLHttpRequest 객체를 생성해야 합니다.
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhr;

}
