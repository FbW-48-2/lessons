import React from 'react'

function Search(props) {
    const { updateSource , sources} = props
    return (
        <div>
             {sources.map(item =>{
          return <button onClick={ ()=> updateSource(item) }>{item} </button>
        })}
            
        </div>
    )
}

export default Search
