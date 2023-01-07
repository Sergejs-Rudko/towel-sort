// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return []
    }

    let result = [];
    let elementSortedMatrix = matrix.map((el, index) => index % 2 === 0 ? el.sort((a, b) => a - b) : el.sort((a, b) => b - a));

    for (let i = 0; i < elementSortedMatrix.length; i++) {
        result = [...result, ...elementSortedMatrix[i]]
    }

    return result;

}
