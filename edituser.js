// CREATE
fetch('https://reqres.in/api/users', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        {
            "name" : "Maccre",
            "job" : "developer"
        }
    )
})  
    .then(res => {
    if (res.ok) { console.log("Create successful") }
    else { console.log("Create unsuccessful") }
    return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

//UPDATE
fetch('https://reqres.in/api/users/2', {
    method: "PUT",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        {
            "name" : "Eccre",
            "job" : "developer"
        }
    )
})  
    .then(res => {
    if (res.ok) { console.log("Update successful") }
    else { console.log("Update unsuccessful") }
    return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

//DELETE
fetch('https://reqres.in/api/users/2', {
    method: "DELETE",
    headers: {
       'Content-type': 'application/json'
    },
})   
    .then(res => {
    if (res.ok) { console.log("Delete successful") }
    else { console.log("Delete unsuccessful") }
    return res
   })
   .then(res => console.log(res))