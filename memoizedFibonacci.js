function memoizedFibonacci(index, cache) {
    cache = cache || [];
    if(cache[index]) {
        return cache[index];
    }else {
        if(index < 3) {
            return 1;
        }else {
            cache[index] = memoizedFibonacci(index - 1, cache) + memoizedFibonacci(index - 2, cache);
        }
    }

    return cache[index];
}

console.log(memoizedFibonacci(5000));