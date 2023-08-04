/* var num = [5, 2, 8, 9 ,3]
num[5] = 6
num.push(7)
num.length = 7
num.sort()
console.log(`nosso numero é ${num}`)
*/

let n = [5,9,2,7,6,3]
n.sort()
var c = n.indexOf(5)
console.log(`O valor está na posição ${c}! `)
//for (c = 0; c < n.length; c++) {

for (c in n) {
console.log(`A posição ${c} tem valor ${n[c]}`)

}
