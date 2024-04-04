//question1
//Write a program that takes in an array of numbers and consoles the first four items 
//multiplied by itself  and the last two added by 10. Return the array with the new values

function multiply(arr){
    let nums = arr.slice(0,4).map(item=>item*item);//loop through and multiply the first four numbers bt themselves
    console.log(nums);
    let nums2=arr.slice(-2).map(item=>item+10);//loop through and plus the last two elements by 10
    let num3=arr.slice(4,-2)
    let newNums=nums.concat(num3).concat(nums2)
    console.log(newNums);
}
    multiply([6,8,9,12,67,8,8,4])

    //Question2
    //Write a program that takes in the following array and use a while loop to iterate and break when the 
    //item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
    let arr1 = [1,2,3,4,5,6,7,8,9]
    let index=0;
    let idx=[4]
    while (index<arr1.length){
        if(arr1[index]===idx){
            break;
        }
        index++;
    }
    console.log(arr1);
//question3
//Write a function that takes in a an array of strings and use a continue statement when 
//the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
function state(fruits){
    let index = 0;
    fruits.forEach((fru,index) =>{
        if(index === 1){
            continue;
        }
        console.log(fru);
    })
}
let fruits= ['apple','plum','banana','strawberries','kiwi'];
state(fruits);
// let i=0;
// let idx1=[2]
// for ( i<fruits.length){
//     if(fruits[i]===idx1){
//         continue;
//     }
//     i++;
// }
// console.log();

//question4
//Write a function that accepts an array of strings and console.logs each element using a for loop.
const str=["leila","yvonne","martin","katumbi"]
str.forEach(function(str){
    console.log(str);
});
//question5
//Write a JavaScript function that takes a string as input and reverses it 
//using a while loop. The function should return the reversed string.
function newstr(str){
    let reversedstring=""
    let i=str.length-1;
    while(i>=0){
        reversedstring+=str.substring(i,i+1)
        i--;
    }
    console.log(reversedstring);
}
newstr("Hello")




