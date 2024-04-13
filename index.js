function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection); 
        }
    } 
    else if (typeof collection === 'object' && collection !== null) {
        for (const key in collection) {
            callback(collection[key], key, collection);
        }
    }
    return collection;
}
function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } 
    else if (typeof collection === 'object' && collection !== null) {
        for (const key in collection) {
            result.push(callback(collection[key], key, collection));
        }
    }
    return result;
}
function myReduce(collection, callback, acc) {
    let accumulator;

    if (acc !== undefined) {
        accumulator = acc;
    } else if (Array.isArray(collection)) {
        accumulator = collection[0];
        collection = collection.slice(1);
    } else if (typeof collection === 'object' && collection !== null) {
        accumulator = Object.values(collection)[0];
        collection = Object.values(collection).slice(1);
    }

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            accumulator = callback(accumulator, collection[i], collection);
        }
    } else if (typeof collection === 'object' && collection !== null) {
        const values = Object.values(collection);
        const keys = Object.keys(collection);
        for (let i = 0; i < values.length; i++) {
            accumulator = callback(accumulator, values[i], collection, keys[i]);
        }
    }

    return accumulator;
}
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } 
    else if (typeof collection === 'object' && collection !== null) {
        for (const key in collection) {
            if (predicate(collection[key])) {
                return collection[key]; 
            }
        }
    }
    return undefined;
}
function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                result.push(collection[i]); 
            }
        }
    } 
    else if (typeof collection === 'object' && collection !== null) {
        for (const key in collection) {
            if (predicate(collection[key])) {
                result.push(collection[key]); 
            }
        }
    }
    return result;
}
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length; 
    } 
    else if (typeof collection === 'object' && collection !== null) {
        return Object.keys(collection).length; 
    }
    return 0;
}
function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0]; 
    } else if (n > 1) {
        return array.slice(0, n); 
    } else {
        return []; 
    }
}
function myLast(array, n = 1) {
    if (n === 1) {
        return array[array.length - 1]; 
    } else if (n > 1) {
        return array.slice(-n); 
    } else {
        return []; 
    }
}
function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}




