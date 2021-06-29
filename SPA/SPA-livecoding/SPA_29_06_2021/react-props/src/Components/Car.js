import React from 'react';
function Car(props){
    return (

        < >
             {/* 1- conditional rendering */}
             { /*   {props.inStock ? 'in Stock' : 'out of stock'}   */}

             {/* 2- conditional rendering */} 
              {/* {props.inStock  &&    
                    
                <div> <h3> {props.brand} </h3>
                <h3> Car Model : {props.model}</h3>
                <img src= {props.photo} alt = "car photo" />
                {props.children}  
                </div>
                } 
             */}

             {/* 3- conditional rendering */}      
             {  
                props.inStock ? <div className="car"> <h3> {props.brand} </h3>
                <h3> Car Model : {props.model}</h3>
                <img src= {props.photo} alt = "car photo" />
                {props.children}  
                </div>
                :   ""

            }
            
          
          
        </>
        

        
    )

}


export default Car;