function areEqual(obj1, obj2) {
    // Helper function to get sorted JSON string of an object
    function sortedJSONStringify(obj) {
        return JSON.stringify(
            Object.keys(obj).sort().reduce((acc, key) => {
                acc[key] = obj[key];
                return acc;
            }, {})
        );
    }

    return sortedJSONStringify(obj1) === sortedJSONStringify(obj2);
}

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

console.log(areEqual(obj1, obj2)); // true
