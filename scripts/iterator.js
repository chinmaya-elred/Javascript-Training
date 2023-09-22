const myIterable = {
    [Symbol.iterator]: function() {
        let index = 0;

        return {
            next: function() {
                if (index < 3) {
                    return { value: index++, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

document.getElementById('myButtonIterator').addEventListener('click', () => {
    const iterator = myIterable[Symbol.iterator]();
    let result = iterator.next();
    
    while (!result.done) {
        alert(result.value);
        result = iterator.next();
    }
});