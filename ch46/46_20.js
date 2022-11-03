async function bar(n) {
    const a = await new Promise(resolve => setTimeout(()=> resolve(n),3000));
    // 두 번째 비동기 처리를 수행하려면 첫 번째 비동기 처리 결과가 필요하다.
    const b = await new Promise(resolve => setTimeout(()=> resolve(a+1),3000));
    // 세 번재 비동기 처리를 수행하려면 두 번째 비동기 처리 결과가 필요하다.
    const c = await new Promise(resolve => setTimeout(()=> resolve(b+1),3000));

    console.log([a,b,c]);
}

bar(1);