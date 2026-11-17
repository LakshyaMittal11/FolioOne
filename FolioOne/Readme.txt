
var: It is an old way of declaring variables. It has function scope and allows both redeclaration and reassignment.

let: It is a modern way of declaring variables. It has block scope and allows reassignment but does not allow redeclaration in the same scope. It is used when the value of a variable needs to change.

const: It also has block scope, but reassignment is not allowed. It is used when a variable should not be reassigned. However, we can still modify the contents of arrays and objects declared with const.


map(): It creates a new array by applying a function to every element. For example, we can use map() to double all numbers in an array.

filter(): It creates a new array containing only elements that satisfy a condition. For example, we can use filter() to select even numbers or remove an item from a dynamic list.

reduce(): It processes all elements of an array and combines them into a single result. For example, we can use reduce() to calculate the sum of numbers or the total price of products.

find(): It returns the first element that satisfies a condition. For example, we can find a user by their ID.