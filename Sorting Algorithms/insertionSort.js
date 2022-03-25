// Insertion Sort
// სორტირება ჩასმით
const array = [1,412,62,22,21,5,27,77];

function insertion(arr){
    let i,j,key;
    
    for(i = 1; i < arr.length;i++){
        key = arr[i];
        j = i - 1;
        
        while(j >= 0  && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1 ] = key;
        console.log(arr);
    }
    
    return arr;    
}

console.log(insertion(array));