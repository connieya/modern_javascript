// GET 요청을 위한 비동기 함수
const get = url => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        if(xhr.status === 200) {
            return JSON.parse(xhr.response);
        }
        console.error(`${xhr.status} ${xhr.statusText}`);
    };
};

// id가 1인 post 획득
const response = get('https://jsonplaceholder.typicode.com/posts/1');
console.log(response); // undefined
