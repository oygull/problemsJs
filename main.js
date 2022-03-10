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
// let n = 3;
// let temp = true;
// for(let i =arr.length-1; i>0; i--){

//   if(arr[i]-n !== arr[i-1]){
//   temp = false;
//   break;
//   }
//   else if(arr[i]-n==arr[i-1]){
//     temp = n;
//   }
// }
// console.log(temp);


// Problem #165

// let arr = [2,6,18];
// let q = 3;
// let temp = true;
// for(let i =arr.length-1; i>0; i--){

//   if(arr[i]/q !== arr[i-1]){
//   temp = false;
//   break;
//   }
//   else if(arr[i]/q==arr[i-1]){
//     temp = q;
//   }
// }
// console.log(temp);


// Problem #166

// let arr = [4,-2, 5, -10, 12, 3, -4, -5];
// let natija = true;

// if (arr[0] < 0) {
//   for (let i = 0; i < arr.length; i++) {
//      if (i % 2 == 0 && arr[i] > 0) {
//         natija = i;
//         break;
            
//     } else if (i % 2 != 0 && arr[i] < 0){
//        natija = i;
//       break;
//      }
//    }
// } else {
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 == 0 && arr[i] < 0) {
//         natija = i;
//         break;
            
//     } else if (i % 2 != 0 && arr[i] > 0){
//        natija = i;
//        break;
//      }
//  }
// }
// console.log(natija);


// Problem #167

// let arr = [-2,5,-10,12,3,-4,-5]
// let even = [];
// let s =0;
// for ( let i = 0; i < arr.length; i++){
//   if(i%2==0){
//     even[even.length]= arr[i]
//   }
// }
// for ( let i = 0; i < even.length; i++){
//  s+=even[i];
// }
// console.log(`Sum is equal to ${s}`);



// Problem #168

// let arr = [-2,5,-10,12,3,-4,-5]
// let newArr = [];

// for (let i=0; i<arr.length; i++){
//   if(arr[i]>arr[i+1]){
//     newArr[newArr.length]= i;
//   }
// }
// console.log(newArr +" c = "+ newArr.length);


// Problem #169

// let arr = [-2,5,-10,12,3,-4,-5]
// let newArr = [];

// for (let i=arr.length-1; i>0; i--){
//   if(arr[i]>arr[i+1]){
//     newArr[newArr.length]= arr[i];
//   }
// }
// console.log(newArr +" c = "+ newArr.length);


// Problem #170

// let arr = [1,-3,-1,-4,7,90]
// let newArr = [];
// let r=10;
// let b = 0;

// for (let i=0; i<arr.length; i++){
//   if(arr[i]==r){
//     b = arr[i];
//     break;
//   }
 
// }
//  let closest = arr[0];
//   for(let item of arr){
//     if(Math.abs(item - r)<Math.abs(closest - r)){
//       closest = item;
//     }
//   }
//   console.log(closest);


// Problem #171

// const arr = [1,-10,2,1,2,5]
//  let counts = {}

//  for(let i =0; i < arr.length; i++){ 
//      if (counts[arr[i]]){
//      counts[arr[i]] += 1
//      } else {
//      counts[arr[i]] = 1
//      }
//     }
//   console.log(counts)


// Problem #172

// let first = [true, -5];
// let second = [2, null];

// let a = first[0];
// let b = first[1];
// first[0]= a;
// first[1]= b;

// console.log(first);
// console.log(second);


// Problem #173

// let arr = [1,-10,2,1,2,5];
// let newArr = [];
// let a = 0;
// let b = 0;

// for(let i=0; i<arr.length; i++){
//   if(arr[i]<5){
//     a = arr[i]*2;
//     newArr[newArr.length] = a;
//   }
//   if(arr[i]==5 || arr[i]>5){
//     b = arr[i]/2;
//     newArr[newArr.length] = b;
//   }
// }
// console.log(newArr);



// Problem #174

// let first = [1,-3,10];
// let second = [12,4,-3];
// let arr =[];
// let c = 0;

// for(let i=0; i<first.length; i++){
//  if(first[i]>second[i]){
//    c= first[i]
//  }
//  else if(first[i]<second[i]){
//   c= second[i]
// }
// arr[arr.length]=c;
// }
// console.log(arr);


// Problem #175

// let arr = [1,2,3,4,5];
// let even = [];

// for(let i=0; i<arr.length; i++){
//   if(arr[i]%2==0){
//     even[even.length]=arr[i];
//   }
// }
// console.log(even);


// Problem #176

// let arr = [1,2,3,4,5];
// let newArr = [];
// let s=0;

// for(let i=1; i<arr.length+1; i++){
//   s+=i;
//   newArr[newArr.length]=s;
// }
// console.log(newArr);


// Problem #177

let arr = [1,2,3,4,5];
let newArr = [];
let s=0;

  for(let i=arr.length-1; i>=0; i--){
    s+=arr[i];
    newArr.unshift(s);
   }
   console.log(newArr);
