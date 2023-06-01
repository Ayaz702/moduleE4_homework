const obj = {a: 1, b: 2, c: 3, d: 4,};
const displayHasOwnObject = (a) => {
    for (let key in a) {
        if (a.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}
displayHasOwnObject(obj);
