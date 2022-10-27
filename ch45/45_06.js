// GET 요청을 위한 비동기 함수
const get = (url , successCallback , failureCallback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            // 서버의 응답을 콜백 함수에 인수로 전달하면서 호출하여 응답에 대한 후속 처리를 한다.
            successCallback( JSON.parse(xhr.response));
        }
        // 에러 정보를 콜백 함수에 인수로 전달하면서 호출하여 에러 처리를 한다.
        failureCallback(xhr.status);
    };
};

// id가 1인 post 획득
get('http://jsonplaceholder.typicode.com/posts/1' , console.log , console.error);

