// fetch('https://api.github.com/users/fbw-48-2')
// .then(res => {
//     return res.json()
// })
// .then(data => {
//     console.log(data);
// })
///////////////////////////////////////////

fetch('https://api.github.com/users/fbw-48-2' ,{
    method:"GET",
    headers: { "Content-type" : "application/json"}
})
.then(res => {
    return res.json()
})
.then(data => {
    console.log(data);
});

//////////////////////////////////////////
// Fetch Post 
const data = {
    userId:123,
    body : " this is new post from fetch",
    title: " new post"
}
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method:"POST",
//     headers: { "Content-type" : "application/json"},
//     body: JSON.stringify(data)
// })
// .then(res =>{
//     console.log(res.status);
//     return  res.json();
//     })
// .then( json => {  console.log(json) })
// .catch(err => {console.log(err)} )

// ///////////////////
// Async Await
async function postData(){
    try {
        const res =  await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method:"POST",
                    headers: { "Content-type" : "application/json"},
                    body: JSON.stringify(data)
    })
    console.log(res.status);
    const result = await res.json();
    console.log(result);
  
        
    } catch (error) {
        console.log(error);
    }

}
postData()