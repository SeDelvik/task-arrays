/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let array1 = data.split(',');
    array1.sort(function (a, b) {
        return a - b;
    });
    let output = array1.reduce(function (acc, n) {
        return acc + n + ',';
    }, '');

    return output.substring(0, output.length - 1);
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    return data.filter(function (n) {
        return n < 100;
    });
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let tmp = [];
    for (let i = 0; i < 5; i++) {
        tmp.push(array1[i]);
        tmp.push(array2[i]);
    }
    return tmp;
}
