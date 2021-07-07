import React ,{useState , useEffect} from 'react';


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

      useEffect( ()=>{
        fetchData(`https://jsonplaceholder.typicode.com/${source}`); 
      },[source])

    return (
        <div className = "App">
            <h1> React Hooks Fetch </h1>
            <h3> {source}</h3>
            {sources.map(item =>{
          return <button onClick={ ()=> updateSource(item) }>{item} </button>
        })}
         {data.length > 0 ? JSON.stringify(data) : <h4>no data </h4> }
        </div>
    )
}

export default DataHooks
