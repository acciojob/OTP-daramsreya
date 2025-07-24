const otp=document.querySelectorAll(".code")
let index=0;
otp.forEach((e,index)=>{
    e.addEventListener('input',()=>{
        if(e.value && index<otp.length-1){
            otp[index+1].focus();
        }
    })
    e.addEventListener('keydown',(element)=>{
        if(element.key==="Backspace" && e.value==="" && index>0){
            otp[index-1].focus();
        }
    })
})
//your JS code here. If required.
