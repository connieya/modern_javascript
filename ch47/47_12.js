const foo = () => {
    throw Error('foo 에서 발생한 에러');
};

const bar = () => {
    foo();
};

const baz = () => {
    bar();
};

try {
    baz();
}catch (err) {
    console.error(err);
}