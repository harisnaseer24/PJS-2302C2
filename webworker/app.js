let head1=document.getElementById("head-1")
let head2=document.getElementById("head-2")
 
let hi=()=>{ head1.innerHTML+="<h4>HI</h4>";}

let cal=()=>{ 

let webworker= new Worker('worker.js');
webworker.postMessage("Start Worker");

webworker.onmessage=(e)=>{
head2.innerHTML=e.data;
}

//   
}