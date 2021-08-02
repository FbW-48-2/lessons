import React , {useContext} from 'react';
import UserContext from '../context';
import { LanguageContext  } from '../context';
 

function Footer() {
    const { theme } = useContext(UserContext);
    const language = useContext(LanguageContext)
  
    return (
        <div>
            <footer className={theme}>
               { language === 'En' ? 'this is the footer   ' : ' das ist Footer '}   
            </footer>
        </div>
    )
}

export default Footer
 