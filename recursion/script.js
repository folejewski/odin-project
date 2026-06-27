function fibs(integer) {
    const fibonacci = new Array(integer);
    for (let index = 0; index < fibonacci.length; index++) {
        if (index === 0) {
            fibonacci[index] = 0;
        } else if (index === 1 || index === 2) {
            fibonacci[index] = 1;
        } else {
            fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
        }
    }
    return fibonacci;
}

function fibsRec(integer) {
    if (integer === 0) return [];
    if (integer === 1) return [0];
    if (integer === 2) return [0, 1];

    const previous = fibsRec(integer - 1);
    const nextNumber = previous[previous.length - 1] + previous[previous.length - 2];
    return [...previous, nextNumber];
}

function merge(left, right) {
    const result = [];
    let l = 0;
    let r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        }
    }

    return [...result, ...left.slice(l), ...right.slice(r)];
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}