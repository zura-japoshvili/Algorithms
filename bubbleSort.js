// BubbleSorting Example


const arr = [1,451,2,51, 52, 21, 13];

function bbsort(arr){
    let newArr = arr;
    let i,j;
    
    for(i = 0; i < newArr.length-1;i++){
        for(j = 0;j<newArr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                let high = arr[j],
                    low = arr[j + 1];
                newArr[j] = low;
                newArr[j + 1] = high;
            }
        }
    }
    
    return  newArr;
}

console.log(bbsort(arr));
