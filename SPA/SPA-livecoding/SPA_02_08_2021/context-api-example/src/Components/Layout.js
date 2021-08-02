import React from 'react'
import UserContext from '../context'
function Layout() {
    return (
        <UserContext.Consumer>
            {(user)=>{
                return (
                <div className={user.theme}>
                    <h3> layout component</h3>
                    <h3> userName :  {user.name}</h3>
                    <h3> user address :  {user.address}</h3>
                    <h3> user age :  {user.age}</h3>
                    <button onClick= { ()=> user.setTheme( user.theme === 'light' ? 'dark' :'light' )}>{user.theme} </button>
                </div>
                )
            }}

        </UserContext.Consumer>
        
    )
}

export default Layout
