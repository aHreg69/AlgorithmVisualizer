// const quickSort = (arr) => {

//     const leftSwaps = [];
//     const rightSwaps = [];

//     if (arr.length <= 1){
//         return arr;
//     }
    
//     let pivot = arr[0];
//     let leftArr = [];
//     let rightArr = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//           leftArr.push(arr[i]);
//           // leftSwaps.push(arr[i]); // This and the one below probably wont work but I am trying
//         } else {
//           rightArr.push(arr[i]);
//           // rightSwaps.push(arr[i]); // I dont know if this will work
//         }
//       }

//     const swapsArr = [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    
//     return swapsArr;
//     // if this doesn't work, then take the contents of swapsArr and put that as the return. I am testing to see if this method of recording the swaps works.
//     // hopefully I can work out this with the animates stuff, because we aren't really changing the main array

// };

export async function newQuickSort(arr, start, end) {
    if (start >= end){
        
        return arr;
    } else {
        let index = await partition(arr, start, end);
        await newQuickSort(arr, start, index-1);
        await newQuickSort(arr, index+1, end);
        console.log(arr);
    }
}

async function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];
    for (let i = start; i<end; i++){
        if (arr[i] < pivotValue){
            await swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    await swap(arr, pivotIndex, end);
    return pivotIndex;
}

async function swap(arr, a, b){
    await sleep(10);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}




// const animateQuickSort = (arr) => {
//     if(arr.length === 0){
//         return arr;
//     }
//     const [i,j] = arr.shift();
// }

// export default animateQuickSort; newQuickSort; // i got rid of quickSort because I commented it out