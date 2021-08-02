import React , { useContext} from 'react'
import LanguageContext from '../context/LanguageContext'
function Fields() {
    const language = useContext(LanguageContext)
    const userName = language === 'En' ? 'User Name' : 'Benutzer Name';
    const password = language === 'En' ? 'User Password' : 'Benutzer Kennwört';
    return (
        <div>
           <div className="ui field">
                <label> { userName}</label>
                <input type="text" />
           </div>
           <div  className="ui field">
                <label> {password} </label>
                <input type="text" />
           </div>
            
        </div>
    )
}

export default Fields
