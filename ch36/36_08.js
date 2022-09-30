// url 을 파싱하여 protocol , host , path 프로퍼티를 갖는 객체를 생성해 반환한다.
function parseURL(url = '') {
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(parsedURL);

    if(!parsedURL) return {};
    const [, protocol , host ,path] = parsedURL;
    return  { protocol, host,path};
}

const parsedURL = parseURL('https://developer.mozila.org/ko/docs/Web/JavaScript');
console.log(parsedURL);
/*
{
    protocol: 'https',
        host: 'developer.mozila.org',
    path: 'ko/docs/Web/JavaScript'
}

*/

