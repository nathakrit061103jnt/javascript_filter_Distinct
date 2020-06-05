////default paramiters
// const addUser = (name, last, city = 'udon') => {
// 	return name + last + 'city = ' + city;
// };

// console.log(addUser('Nathakrit', 'Nathakrit', 'กรุงเทพอุดร'));
// console.log(addUser('Nathakrit', 'Nathakrit'));

////Rest Operator
// const addUser = (name, last, ...city) => {
// 	return `${name} ${last} ${city}`;
// };

// console.log(addUser('James', 'Nathakrit', 'Udon', 'Bankok'));
// let result = [...new Set([1, 1, 2, 3, 4, 5, 6, 7, 8])];

// console.log(result);

let a1 = [1, 2, 3, 4, 5, 6];

let a2 = [6, 5, 9, 7];

let all = [...a1, ...a2];

console.log(all);
