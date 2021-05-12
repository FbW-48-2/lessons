
1.  **isPlainObject** - Write a method that verifies an argument is a plain object, not an array or null


 * **Task description:** Write a method that verifies an argument is a plain object, not an array or null  
 * **Expected Result:** True if object is plain, false otherwise.   
     ({ a: 1 }) => true,   
     ([1, 2, 3]) => false
     ```js
        const data = { a: 1 };
        console.log(isPlainObject(data)); // true
     ```


2.  **MakePairs** - Write a method that returns a deep array like [[key, value]]


  * **Task description:** Write a method that returns a deep array like [[key, value]]   
  * **Expected Result:** ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]   

    ```js
        const data = { a: 1, b: 2 };
        console.log(makePairs(data)); // [['a', 1], ['b', 2]] 
     ```

3.  **Without** - Write a method that returns a new object without provided properties
 
  * **Task description:** Write a method that returns new object without provided properties   
  * **Expected Result:** ({ a: 1, b: 2 }, 'b') => { a: 1 }   

    ```js
        const data = { a: 1, b: 2 };
        console.log(without(data, 'b')); // { a: 1 }
     ```

4.  **IsEmpty** - Write a method that makes a shallow check is object empty

 
  * **Task description:** Write a method that makes a shallow check is object empty   
  * **Expected Result:** ({}) => true, ({ a: undefined }) => true,   
      ({ a: 1 }) => false   

    ```js
        const data = { a: 1, b: undefined };
        const data2 = { a:undefined };
        console.log(isEmpty(data)); // false
        console.log(isEmpty(data2)); // true 
     ```


5.  **IsEqual** - Write a method that makes a shallow compare of two objects

  * **Task description:** Write a method that makes a shallow compare of two objects   
  * **Expected Result:** True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true   

    ```js
        const data = { a: 1, b: 1 };  
        const data2 = { a: 1, b: 1 };  
        const data3 = { a: 1, b: 2 };
        console.log(isEqual(data, data2)); // true  
        console.log(isEqual(data, data3)); // false
     ```


6.  **Invoke** - Write a method that invokes an array method on a specific path

  * **Task description:** Write a method that invokes an array method on a specific path   
  * **Expected Result:** ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]   
  

    ```js
        const data = { a: { b: [1, 2, 3] } }
        console.log(invoke(data, 'a.b', 
        'splice', [1, 2]));
         // [2, 3]
     ```

7.  **IsEmptyDeep** - Write a method that makes a deep check is an object empty
 
  * **Task description:** Write a method that makes a deep check is an object empty   
  * **Empty values:** '', null, NaN, undefined, [], {}   
  * **Expected Result:** ({}) => true,   
      ({ a: { b: undefined } }) => true,   
      ({ a: { b: [] } }) => true   

    ```js
          
        const data = { a: { b: undefined } };
        console.log(isEmptyDeep(data));
        //true
     ```


8.  **IsEqualDeep** - Write a method that makes a deep compare of two objects
  
  * **Task description:** Write a method that makes a deep compare of two objects   
  * **Expected Result:** True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true   

    ```js
    const data = { a: 1, b: { c: 1 } };  
    const data2 = { a: 1, b: { c: 1 } };  
    const data3 = { a: 1, b: { c: 2 } };
    console.log(isEqualDeep(data, data2));// true  
    console.log(isEqualDeep(data, data3)); // false   
     ```
9.  **Intersection** - Write a method that finds shallow intersections of objects
   
  * **Task description:** Write a method that finds shallow intersections of objects   
  * **Expected Result:** ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }   
 
    ```js
        const data = { a: 1, b: 2 };  
        const data2 = { c: 1, b: 2 };
        console.log(intersection(data, data2)); // { b: 2 }
     ```


10.  **IntersectionDeep** - Write a method that finds all intersections of objects
   
  * **Task description:** Write a method that finds all intersections of objects  
  * **Expected Result:** ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }   

    ```js
        const data = { a: 1, b: { c: 3 } };  
        const data2 = { c: 1, b: { c: 3 } };
        console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }
     ```