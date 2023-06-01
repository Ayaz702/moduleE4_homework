const obj = {file: 1, b: 2, c: 3, d: 4,};
let str = "file";
const str_in_obj = (a, b) => {
    for (let key in a) {
        if (key == b) {
            return true;
        }
    }
    return false;
}
let result = str_in_obj(obj, str);
console.log(result);
