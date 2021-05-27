//1
const data = { a: 1 };

const isPlainObject = (element) => typeof element === 'object' && !Array.isArray(element) && element !== null;

console.log(isPlainObject(data)); // true

//2
const data2 = { a: 1, b: 2 };
const makePairs = (object) => {
    const result = [];
  
    for (const prop in object) {
      if (object.hasOwnProperty(prop)) {
        result.push([prop, object[prop]]);
      }
    }
  
    return result;
  };
console.log(makePairs(data2)); // [['a', 1], ['b', 2]] 

//3
const data3 = { a: 1, b: 2 };
const without = (object, ...args) => {
    const newObject = { ...object };
  
    args.forEach((arg) => {
      delete newObject[arg];
    });
  
    return newObject;
  };
console.log(without(data3, 'b')); // { a: 1 }


//4
const data4 = { a: 1, b: undefined };
const data40 = { a:undefined };
const isEmpty = (object) => {
    const objectKeys = Object.keys(object);
    if (objectKeys.length === 0) {
      return true;
    }
  
    return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
  };
console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true 

//5
const data5 = { a: 1, b: 1 };  
const data51= { a: 1, b: 1 };  
const data52 = { a: 1, b: 2 };
const isEqual = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);
  
    if (firstObjKeys.length !== secondObjKeys.length) {
      return false;
    }
  
    return !firstObjKeys.filter((key) => firstObj[key] !== secondObj[key]).length;
  };
/*   const isEqual2 = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);
  
    if (firstObjKeys.length !== secondObjKeys.length) {
      return false;
    }
  
    for (const prop in firstObj) {
      if (firstObj.hasOwnProperty(prop) && (firstObj[prop] !== secondObj[prop])) {
        return false;
      }
    }
  
    return true;
  }; */
console.log(isEqual(data5, data51)); // true  
console.log(isEqual(data5, data52)); // false

//6
const data6 = { a: { b: [1, 2, 3] } }
invoke = (object, path, func, args) => {
    const splittedPath = path.split('.');
  
    const target = splittedPath.reduce((acc, key) => {
      acc = acc[key] ? acc[key] : object[key];
      return acc;
    }, {});
  
    return Array.prototype[func].apply(target, args);
  };
console.log(invoke(data6, 'a.b', 
'splice', [1, 2])) // [2, 3]


//7
const data7 = { a: { b: undefined } };
const isEmptyDeep = (element) => {
    if (element === null) {
      return true;
    }
    if (Array.isArray(element)) {
      if (element.length === 0) {
        return true;
      }
  
      let result;
      for (let i = 0; i < element.length; i += 1) {
        if (typeof element[i] === 'boolean' || (typeof element[i] === 'number' && !Number.isNaN(element[i]))
          || (typeof element[i] === 'string' && element[i] !== '')) {
          result = false;
          break;
        }
        if (Array.isArray(element[i]) || (typeof element[i] === 'object' && element[i] !== null)) {
          result = isEmptyDeep(element[i]);
          break;
        }
  
        result = true;
      }
  
      return result;
    }
    if (typeof element === 'object') {
      const objectKeys = Object.keys(element);
      if (objectKeys.length === 0) {
        return true;
      }
  
      let result;
      for (let i = 0; i < objectKeys.length; i += 1) {
        const value = element[objectKeys[i]];
  
        if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value))
          || (typeof value === 'string' && value !== '')) {
          result = false;
          break;
        }
        if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
          result = isEmptyDeep(value);
          break;
        }
  
        result = true;
      }
  
      return result;
    }
  };
console.log(isEmptyDeep(data7));


//8
const data8 = { a: 1, b: { c: 1 } };  
const data81 = { a: 1, b: { c: 1 } };  
const data82= { a: 1, b: { c: 2 } };
const isEqualDeep = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);
  
    if (firstObjKeys.length === 0 && secondObjKeys.length === 0) {
      return true;
    }
  
    const compareList = firstObjKeys.map((key) => {
      const valueOfFirstObject = firstObj[key];
      const valueOfSecondObject = secondObj[key];
      if ((Number.isNaN(valueOfFirstObject) && Number.isNaN(valueOfSecondObject))
        || (valueOfFirstObject === null && valueOfSecondObject === null)) {
        return true;
      }
      if (valueOfFirstObject === valueOfSecondObject) {
        return true;
      }
      if (Array.isArray(valueOfFirstObject) && Array.isArray(valueOfSecondObject)) {
        return isArraysEqualDeep(valueOfFirstObject, valueOfSecondObject);
      }
      if (typeof valueOfFirstObject === 'object' && typeof valueOfSecondObject === 'object') {
        return isEqualDeep(valueOfFirstObject, valueOfSecondObject);
      }
  
      return false;
    });
  
    return !compareList.includes(false) && !compareList.includes(undefined);
  };
  
  const isArraysEqualDeep = (firstArray, secondArray) => {
    if (firstArray.length !== secondArray.length) {
      return false;
    }
  
    const compared = firstArray.map((el, id) => {
      if (Array.isArray(el) && Array.isArray(secondArray[id])) {
        return isArraysEqualDeep(el, secondArray[id]);
      }
      if (typeof el === 'object' && typeof secondArray[id] === 'object') {
        return isEqualDeep(el, secondArray[id]);
      }
  
      return secondArray[id] === el;
    });
  
    return !compared.includes(false);
  };
  
console.log(isEqualDeep(data8, data81));// true  
console.log(isEqualDeep(data8, data82)); // false  


//9
const data9 = { a: 1, b: 2 };  
const data91 = { c: 1, b: 2 };
const intersection = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);
  
    return firstObjKeys.reduce((acc = {}, key) => {
      if (firstObj[key] === secondObj[key]) {
        acc = {
          ...acc,
          [key]: firstObj[key],
        };
      }
  
      return acc;
    }, {});
  };
console.log(intersection(data9, data91)); // { b: 2 }


//10
const data10 = { a: 1, b: { c: 3 } };  
const data11 = { c: 1, b: { c: 3 } };
const intersectionDeep = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);
  
    return firstObjKeys.reduce((acc = {}, key) => {
      if (firstObj[key] === secondObj[key]) {
        acc = {
          ...acc,
          [key]: firstObj[key],
        };
      }
      if (Array.isArray(firstObj[key]) && Array.isArray(secondObj[key])) {
        const isEqualArrays = isEqualDeep(firstObj[key], secondObj[key]);
  
        if (isEqualArrays) {
          acc = {
            ...acc,
            [key]: firstObj[key],
          };
        }
      } else if (typeof firstObj[key] === 'object' && typeof secondObj[key] === 'object') {
        const hasIntersection = intersectionDeep(firstObj[key], secondObj[key]);
  
        if (Object.keys(hasIntersection).length !== 0) {
          acc = {
            ...acc,
            [key]: hasIntersection,
          };
        }
      }
      return acc;
    }, {});
  };
console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }
