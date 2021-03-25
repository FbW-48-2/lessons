# for loop exercise:


1- use nested **for loop or while loop** to create this shape of stars : 

 
        * * * * * * * * * *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        * * * * * * * * * * 

> function to create the shape and take number of rows and number of stars

```javascript

function  draw(stars , rows){

for(let  i = 0 ; i < rows ; i++){  

            for (let  a = 0 ; a < stars ; a++) {

                if(a === 0 || i === 0 || i === rows-1 || a === stars -1){

                process.stdout.write('* ');    // print *       

                }

                else  process.stdout.write(' '); // print space

  

            }

process.stdout.write('\n'); // new line 

}  

}
 

draw(10 , 10)
```

2- use nested for loop or while loop to create this shape of stars : 

          *
          * *
          *   *
          *     *
          *       *
          *         *
          *           *
          *             *
          *               *
          * * * * * * * * * * 
          
          

3- use nested for loop or while loop to create this shape of stars : 


          * * * * * * * * * *
          *               *
          *             *
          *           *
          *         *
          *       *
          *     *
          *   *
          * *
          * 
          
4-  use nested for loop or while loop to create this shape of stars : 



           * * * * * * * * * *
             *               *
               *             *
                 *           *
                   *         *
                     *       *
                       *     *
                         *   *
                           * *
                             *