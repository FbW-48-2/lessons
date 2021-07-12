import React ,{useState , useEffect} from 'react';
import Search from './Components/Search';

function DataHooks() {
    
    const [source , setSource ] = useState('todos');
    const [sources , setSources ] = useState(['users','todos','photos','albums','comments','posts']);
    const [data , setData] = useState([]);

    function updateSource(val){
        setSource(val)

    }
    async function fetchData(url){
        const res = await fetch(url);
        const result = await res.json();
        console.log(result);
        setData(result)
    
      }
      useEffect(()=>{
        fetchData(`https://jsonplaceholder.typicode.com/${source}`);
      },[] )

      // works once as componentdidmount 

    

      useEffect( ()=>{
     fetchData(`https://jsonplaceholder.typicode.com/${source}`); 
      },[source])
      // works if source state has been updated


      // useEffect(()=>{
      //    console.log(' the state data has been updated....');
      // },[data ,source] )

    return (
        <div className = "App">
            <h1> React Hooks Fetch </h1>
            <h3> {source}</h3>
           <Search  sources = {sources}  updateSource = {updateSource}/>
         {data.length > 0 ? JSON.stringify(data) : <h4>no data </h4> }
        </div>
    )
}

export default DataHooks
