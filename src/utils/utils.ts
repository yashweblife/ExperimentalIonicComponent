export const generateID = (n:number=10)=>{
    const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234568790";
    var output = "";
    for(var i=0;i<n;i++){
      output += a[Math.floor(Math.random()*a.length)]
    }
    return(output);
  }
  