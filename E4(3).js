function addObject() {
    return Object.create(null);
}
const obj = addObject();
console.log(obj);
console.log(Object.getPrototypeOf(obj));