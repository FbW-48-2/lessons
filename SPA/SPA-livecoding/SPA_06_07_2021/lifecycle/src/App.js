import './App.css';
import { useState } from 'react';
import Header from './Components/Header';

function App() {
  const [state , setState] = useState({
    showHeader:true
  });
  const [titles , setTitles] = useState([
    "react lifecycle",
    "react-router",
    "react global state",
    "react hooks"
  ]);
  const [mainTitle , setMainTitle] = useState("React")
  function shoHandler(){
    setState({ showHeader: !state.showHeader })
  }
  function clickHandler(text){
    setMainTitle(text)
  }
  return (
    <div className="App">
      { state.showHeader && <Header newTitle = {mainTitle}/>  }
      <button onClick = { shoHandler} >{state.showHeader ? 'Mount/Show' :'Unmount/Hide'} </button>
      {titles.map((title)=>{
        return <h4 onClick={()=> clickHandler(title)}  > {title}</h4>
      })}
    </div>
  );
}

export default App;
