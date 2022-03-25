const binarySearch = (list, val) => {
    let left = 0;
    let right = list.length - 1;
    let mid = Math.floor((left + right) / 2);

    while(list[mid] !== val && left <= right){
        if(val < list[mid]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    if(list[mid] === val){
        return mid;
    } else {
        return -1;
    }

}

const list = [2,3,5,7,10,12,15,21,43,52,53];
const value = 7;

binarySearch(list, value);