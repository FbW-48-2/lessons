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
          
          
```javascript
function draw2(stars , rows){
   
    for(let i = 0 ;i < rows;i++){        // to make rows          
        
        for(let a = 0; a < stars;a++){ // to make stars  
               if( a ===  0|| i === rows -1 || a === i )          
                process.stdout.write(" *"); 
                
                else
                process.stdout.write("  "); 


        }

        process.stdout.write('\n'); // new line
        
    }
    
}
 draw2(12,12)
 // try to replace the the expression inside if with this : a ===  0|| a === stars -1 || a === i
```
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
 ```javascript
 
   
   function draw3(stars , rows){
   
    for(let i = 0 ;i < rows;i++){        // to make rows          
        
        for(let a = 0; a < stars;a++){ // to make stars  
               if( i ===  0||   a === 0 || i + a === stars-1 )           
                process.stdout.write(" *"); 
                
                else
                process.stdout.write("  "); 


        }

        process.stdout.write('\n'); // new line
        
    }
    
}
 
 draw3(12,12)
 ```
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
```javascript 
function draw4(stars , rows){
   
    for(let i = 0 ;i < rows;i++){        // to make rows          
        
        for(let a = 0; a < stars;a++){ // to make stars  
               if( i === 0 || a === stars -1 || a === i )           
                process.stdout.write(" *"); 
                
                else
                process.stdout.write("  "); 


        }

        process.stdout.write('\n'); // new line
        
    }
    
}
 draw4(8,8)
```