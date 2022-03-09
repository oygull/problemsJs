// Problem #153

// let arr = [7,10,5,3,2];
// let newArr = [];
// let c =0;
// for(let i=0; i<arr.length; i++){
//   if(arr[i]%2==0){
//     newArr[newArr.length]=i;
//   }
// }
// for(let i=0; i<newArr.length; i++){
//   for(let j=i; j<newArr.length; j++){
//     if(newArr[i]<newArr[j]){
//      c = newArr[i];
//      newArr[i]=newArr[j];
//      newArr[j]=c;
//     }
//   }
// }
// console.log(newArr+ " Length is equal to " +newArr.length);


// Problem #154

// let arr = [7,10,5,3,2];
// let newArr = [];
// let k =2;
// for(let i=0; i<arr.length; i++){
//     if(i%k==0){
//       newArr[newArr.length]=arr[i];
//     }
//   }
//   console.log(newArr);


// Problem #155

// let arr = [7,10,5,3,2];
// let newArr = [];
// for(let i=0; i<arr.length; i++){
//     if(i%2==0){
//       newArr[newArr.length]=arr[i];
//     }
//   }
//   console.log(newArr);


// Problem #156

// let arr = [1,2,3,10,-4,true];
// let newArr = [];
// for(let i=arr.length-1; i>0; i--){
//     if(i%2!==0){
//       newArr[newArr.length]=arr[i];
//     }
//   }
//   console.log(newArr);


// Problem #157

// let arr = [7,10,5,3,2];
// let newArr = [];
// let oddIndex = [];
// for(let i=0; i<arr.length; i++){
//     if(i%2==0){
//       newArr[newArr.length]=arr[i];
//     }
//     if(i%2!==0){
//       oddIndex[oddIndex.length]=arr[i];
//     }
//   }
//   for(let i=0; i<oddIndex.length; i++){
//     newArr[newArr.length]= oddIndex[i]
//   }

//   console.log(newArr);


// Problem #158

// let arr = [1,2,3,10,-4,true];
// let newArr = [];
// let newArr2 = [];
// let b = arr.length/2;
// let n = arr.length;
// let j=0;
// let k=0;

// for(let i=0; i<b; i++){
//  newArr[newArr.length]=arr[i]
// }
// for(let i=1; i<b+1; i++){
//   newArr2[newArr2.length]=arr[n-i]
//  }

//  for(let i=0; i< arr.length; i++){
//   if(i%2==0){
//     arr[i]= newArr[j];
//     j+=1;
//   }
//   if(i%2!==0){
//     arr[i]= newArr2[k];
//     k+=1;
//   }
// }
// console.log(arr);


// Problem #159

// let arr = [7,10,3,5];
// let end = arr.length;
// let temp = true;

// for(let i =0; i<end; i++){
//   if(arr[i]<end){
//     console.log(arr[i]);
//     temp = false;
//     break;
//   }
// }
//  if(temp==true){
//   console.log("Mavjud emas!");
// }


// Problem #160

// let arr = [10,12,5,11,13,15];
// let start = arr[0];
// let end = arr.length;
// let temp = true;

// for(let i =arr.length-2; i>1; i--){
//   if(start<arr[i] && end<arr[i]){
//     console.log(i);
//     temp=false;
//     break;
//   }
// }
// if(temp==true){
//   console.log(false);
// }


// Problem #161

// let newArray = [5,10,3,7,10,12,4];
// let K = 0;
// let L = 4;
// let sum = 0;
// for ( let i = K+1; i<L; i++){
//   sum += newArray[i];
// }
// console.log(`Output: ${sum}`);


// Problem #162

// let newArray = [5,10,3,7,10,12,4];
// let K = 0;
// let L = 4;
// let sum = 0;
// let l = L-K;
// for ( let i = K+1; i<L; i++){
//   sum += newArray[i];
// }
// let avarage = sum/(l-1)
// console.log(`Output: ${avarage}`);



// Problem #163

// let newArray = [5,10,3,7,10,12,4];
// let K = 0;
// let L = 4;
// let sum = 0;
// let mainSum = 0;
// let l = L-K;
// for ( let i = K+1; i<L; i++){
//   sum += newArray[i];
// }
// for(let i=0; i<newArray.length; i++){
//   mainSum += newArray[i]
// }
// let answer = mainSum - sum;
// console.log(`Output: ${answer}`);


// Problem #164

// let arr = [11,14,17,20,23];
// let n = arr[1]-arr[0];
// let temp = true;
// for(let i =0; i<arr.length; i++){
//   if(arr[i]+n==arr[i+1]){
//     console.log(n);
//     temp = false;
//   }
// }
// if(temp==true){
//   console.log(false);
// }

