let hours = document.querySelector(".h");
let min = document.querySelector(".m");
let sec = document.querySelector(".s");
setInterval(() => {
  let h  = new Date().getHours();
  let m  = new Date().getMinutes();
  let s  = new Date().getSeconds();
  
  
  h =  h < 10 ? "0" + h : h ; 
  m =  m < 10  ? "0" + m : m ; 
  s =  s < 10 ? "0" + s : s ; 
  if (h > 5 && h <= 19){
   document.body.style.cssText=`
    background: url(morning.jpg);
    background-size: cover;
    background-position: center;
    align-items: center;
    text-align: center;
    height: 100vh;
   `;
  }else if( h == 20   ) {
    document.body.style.cssText =  `
    background: url(aftr.jpg);
   background-size: cover;
   background-position: center;
   align-items: center;
   text-align: center;
   height: 61vh;
    `;
  }else if (h > 20 || h <= 5 ) {
    document.body.style.cssText =  `
   background: url(barmaja.jpg);
   background-size: cover;
   background-position: center;
   align-items: center;
   text-align: center;
   height: 100vh;
    `;

  }
  hours.innerHTML = h ;
  min.innerHTML = m ;
  sec.innerHTML = s ; 
  
}, 1000);
