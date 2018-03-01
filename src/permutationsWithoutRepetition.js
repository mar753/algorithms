/* Permutations without Repetition (n! possibilities) - Iteration variant
 *
 * Will print all permutations without repetition of the A array,
 * there is n! possibilities, where n is the size of our array A.
 */

// Input parameters (example)
let A = ['a', 'b', 'c', 'd'];
// ------------------------------

const n = A.length;
let i = 0;
let tmp = 0;
let stack = [];
stack.push([A.slice(), i]);

do {
  tmp = stack.pop();
  A = tmp[0];
  i = tmp[1];
  console.log(A);
  do {
    for (let j=i; j<n-1 ; ++j) {
      tmp = A[j+1]; A[j+1] = A[i]; A[i] = tmp; //swap array elements
      stack.push([A.slice(), i+1]);
      tmp = A[j+1]; A[j+1] = A[i]; A[i] = tmp; //'unswap' array elements
    }
    i++;
  } while(i < n);
} while (stack.length);
