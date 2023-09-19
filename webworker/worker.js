onmessage=(e)=>{
    let result=0;
    for(let i=0;i<12024521241;i++){
      result+=i;
    }

    postMessage(result)
}