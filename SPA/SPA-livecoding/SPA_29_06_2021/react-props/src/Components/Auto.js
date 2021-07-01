import React from 'react';

export  class Auto extends React.Component {

    render(){
        const myStyle = 'light'
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
                    this.props.inStock ? <div style={ myStyle === 'dark'? { backgroundColor:"grey" } : { backgroundColor:"lightgreen"}} className="car"> <h3> {this.props.brand} </h3>
                    <h3 style = {myStyle ==='dark' && { backgroundColor:'darkblue'} || { backgroundColor:'green'}  } > Car Model : {this.props.model}</h3>
                    <img src= {this.props.photo} alt = "car photo" />
                    {this.props.children}  
                    </div>
                    :   ""
    
                }
                
              
              
            </>
            
    
            
        )
    }
}