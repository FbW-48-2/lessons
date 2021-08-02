import React , { useContext} from 'react'
import LanguageContext from '../context/LanguageContext'

function Button() {
    const language = useContext(LanguageContext)   ;
    const text = language ==='En' ? 'Submit' : 'Anmelden' 
    return (
        <div>
            <button className="ui button primary">
                {text}
            </button>
        </div>
    )
}

export default Button
