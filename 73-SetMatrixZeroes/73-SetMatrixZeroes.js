// Last updated: 20/09/2026, 06:31:19
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = 'x';

            }
        }

    }
    //step 2 
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 'x') {
                let c = 0;
                while (c < n) {
                    if (matrix[i][c] !== 'x'){
                    matrix[i][c] = 0;
                }
                c++;
            }

            let r = 0;
            while (r < m) {
                if (matrix[r][j] !== 'x') {
                    matrix[r][j] = 0;
                }
                r++;
            }
        }
    }
    }
    // final iteration
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 'x') {
                matrix[i][j] = 0;
            }

        }

    }
};