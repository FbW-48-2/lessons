// fetch('https://jsonplaceholder.typicode.com/photo0s')
// .then( res => {
//     console.log( res);
//     // if(res.status ===404){
//     //     console.log('error with fetching the data!!!');
//     // }
//     //console.log(res.json());
// return res.json()
// })
// .then(data=>{

// console.log(data);

// })
// .catch(err =>{
//     console.log(err);
// })

////////////////////////////////
const fetchData = async ()=>{
    try {
            const res =   await fetch('https://jsonplaceholder.typicode.com/photos');     
            const data =  await res.json();
          //  console.log(data);
            return data    
   
          
        
    } catch (error) {
        console.log(error);
    }
  

}

fetchData()
.then(data => {
    console.log(data);
    data.forEach(item => {
      //console.log(item.thumbnailUrl);
      const img = document.createElement('img');
      img.src = item.thumbnailUrl
      document.body.appendChild(img)

    });


})
