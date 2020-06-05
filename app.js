let users = [
    {name: 'pop', age: 24},
    {name: 'man', age: 26},
    {name: 'pop', age: 26},
    {name: 'bon', age: 22},
    {name: 'pam', age: 23},
    {name: 'pam', age: 289}
]

// console.log(users)
/*
console.log(unique)


const su =users.filter(function(item, index, arrays) {
    return arrays.filter(m => item.name == m.name).length == 1;
});

console.log(su)
*/

/*
let filtered_users = users.filter(user =>
    users.filter(compare_user => compare_user.name === user.name).length === 1
);
console.log(filtered_users);
* */

/*
* users.filter(function(item, index, arrays) {
return arrays.filter(m => item.name == m.name).length == 1;
});
* */

// https://usefulangle.com/post/189/javascript-array-intersection-difference?fbclid=IwAR1-n9bAlzinJVoLChC2_jmXIP2XBZUSo-agjwfCiaKgoUBIzFWrmHxW56Y

/*
*
* let filtered_users = users.filter(user =>
users.filter(compare_user => compare_user.name === user.name).length === 1
);
console.log(filtered_users);
*
* ติดปีกโปรแกรมเมอร์มือใหม่
การทำงานของ filter คือ จะวนลูปทุก object ใน array แล้วนำ object ที่ตรงตามเงื่อนไข มาสร้างเป็น array ใหม่
1. users.filter ด้านนอกวนลูป object ของ array users ทีละตัวใน ตัวแปร user
2. users.filter ด้านในวนลูป object ของ array users ทีละตัวอีกครั้ง ในตัวแปร compare_user แล้วนำ property name แต่ละตัวมาเทียบกับ user.name จากข้อ 1 ... ถ้าตรงกัน ก็จะได้ array ใหม่มา เช่น คนชื่อ 'pop' จะได้ array คือ [{name: 'pop', age: 24}, {name: 'pop', age: 26},] ส่วนคนอื่นๆ เช่น 'bon' จะได้ array คือ [{name: 'bon', age: 22}]
3. กลับมาที่เงื่อนไขของ filter ในข้อ 1 ... เราจะเอา array จากข้อ 2 มาเช็คว่า array ใดมี length เท่ากับ 1 ก็จะใช้ array นั้นครับ
*
* */

//https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31?fbclid=IwAR12Vj1mjmoh_KE_t-n_-FmBignAi-pun2WSQFXt3Y3jNHAWIf4qoS7pooY