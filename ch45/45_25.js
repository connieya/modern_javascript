const url = 'http://jsonplaceholder.typicode.com';

(async () => {
    const {userId} = await promiseGet(`${url}/posts/1`);

    const userInfo = await promiseGet(`${url}/users/${userId}`);
})();