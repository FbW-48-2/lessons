// ***LOGICAL OPERATORS***

//Declare two variables "dogIsBetter" with the value of true and "b" with the value of false.

const dogIsBetter = true; catIsBetter = false;

// 1 Check the result of:

// 1a

console.log(`Q1a: ${dogIsBetter && catIsBetter}`); // For an && statement to be true, both its arguments must be simultaneously true. There is no state where true && false can be simultaneously true. Therefore this statement is false

// 1b

console.log(`Q1b: ${dogIsBetter || catIsBetter}`); // For an || statement to be true, only one argument needs to be true, i.e. dogIsBetter OR catIsBetter. Since true is... true..., this statement can be true.

//NOTE: logically, we do not need to check the second argument for truth as the statement has already met a sufficient condition of truth with a true first argument. If, however, the statement was reversed, i.e. catIsBetter || dogIsBetter, upon discovering that catIsBetter is false, we would then have to check whether dogIsBetter is true before being able to determine whether the statement is true. Computers would approach these statements in a similar logical process.

// 1c

console.log(`Q1c: ${!(dogIsBetter && catIsBetter)}`); // note this is the opposite instance of 1a; since true && false cannot be true, so !(true && false) must be true.

// 2 Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values.

const atoms = 5; sandGrains = 10; starsInSky = 2;

// 3 Check the result of whether:

// 3a atoms is greater than starsInSky AND atoms is greater than sandGrains.

console.log(`Q3a: ${(atoms > starsInSky) && (atoms > sandGrains)}`); // it is not simultaneously true that 5 is greater than 2 AND 5 is greater than 10, since 5 is not greater than 10.

// 3b atoms is NOT equal to sandGrains.

console.log(`Q3b: ${atoms !== sandGrains}`); // it is true that 5 is not equal to 10.

// 3c starsInSky is less than sandGrains OR starsInSky is greater than atoms.

console.log(`Q3c: ${(starsInSky < sandGrains) || (starsInSky > atoms)}`); // it is true that EITHER 2 is less than 10 OR 2 is greater than 5, since 2 is less than 10 is true.

// 3d atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.

console.log(`Q3d: ${(atoms == starsInSky) || (atoms !== sandGrains)}`); // it is true that EITHER 5 is equal to 2 OR 5 is not equal to 10, since 5 is not equal to 10.

// 3e atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.

console.log(`Q3e: ${(atoms >= 10) && (sandGrains <= 10)}`); // this is not true since 5 is not greater than or equal to 10. There is no need to logically assess the truth of the second argument in a && statement with one false argument.

// 3f atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.

console.log(`Q3f: ${((atoms * starsInSky) < 100) || ((atoms * sandGrains) > 100)}`); // this is true since 5 times 2 is less than or equal to 100. There is no need to logically assess the truth of the second argument in a || statement with one true argument.

