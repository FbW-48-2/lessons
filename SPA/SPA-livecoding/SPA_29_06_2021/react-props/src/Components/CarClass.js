import React from 'react';

export  class CarClass extends React.Component {

    render(){

        return (

            < >
                 {/* 1- conditional rendering */}
                 { /*   {this.props.inStock ? 'in Stock' : 'out of stock'}   */}
    
                 {/* 2- conditional rendering */} 
                  {/* {this.props.inStock  &&    
                        
                    <div> <h3> {this.props.brand} </h3>
                    <h3> Car Model : {this.props.model}</h3>
                    <img src= {this.props.photo} alt = "car photo" />
                    {this.props.children}  
                    </div>
                    } 
                 */}
    
                 {/* 3- conditional rendering */}      
                 {  
                    this.props.inStock ? <div className="car"> <h3> {this.props.brand} </h3>
                    <h3> Car Model : {this.props.model}</h3>
                    <img src= {this.props.photo} alt = "car photo" />
                    {this.props.children}  
                    </div>
                    :   ""
    
                }
                
              
              
            </>
            
    
            
        )
    }
}