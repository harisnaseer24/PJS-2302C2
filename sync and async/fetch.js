//IIFE immediately invoked function expression
(async function(){
let userlist=document.getElementById("userlist");
let users=await fetch("https://dummyjson.com/users").then(resp=>resp.json())
.then(data=>{
    console.log(data.users)
    data.users.forEach(element => {
    // console.log(element.firstName)
    userlist.innerHTML+=`
    <div class="col-lg-3">
            <div class="card mt-2 text-center">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.firstName} ${element.lastName}</h5>
                  <p class="card-text">University: ${element.university}</p>
                  <p class="card-text">Phone: ${element.phone}</p>
                  <p class="card-text">Username: ${element.username}</p>
                  <a href="mailto:${element.email}" class="btn btn-danger">${element.email}</a>
                </div>
              </div>
        </div>  `})
})})()


