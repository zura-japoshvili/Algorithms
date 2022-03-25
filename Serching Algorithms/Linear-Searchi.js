const list = [221,41,2,61,66,61221,5];
const value = 61;

const linearSearch = (list, value) => {
    for(let i = 0; i < list.length; i++){
        if(list[i] === value){
            return 1;
        }
    }
    return -1;
}

linearSearch(list, value);