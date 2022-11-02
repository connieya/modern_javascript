const wrongUrl = 'https://jsonplaceholder.typicode.com/XXX/1';

// 부적절한 URL이 지정되었기 때문ㅇ에 404 Not Found 에러가 발생한다.
fetch(wrongUrl)
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
.then(todo=>console.log(todo)).catch(err=>console.log(err));