
let url="https://www.google.com/search?q=";
const searcInput=document.querySelector(".searcInput");
const searchbtn=document.querySelector(".search-btn");
searchbtn.addEventListener("click",()=>{

if(searcInput.value!="")
{
url=url+searcInput.value;
window.open(url,"_blank")//yeni pencere de açmamızı sağlıyor
searcInput.value=""
url="https://www.google.com/search?q="
}
})



searcInput.addEventListener("keypress",(e)=>{

if(e.keyCode==13)
{
if(searcInput.value!="")
    {
        url+=searcInput.value
window.open(url,"_blank")
searcInput.value=""
    }
}
}
);

searcInput.addEventListener("keypress",(e)=>{

if(e.keyCode==13)
    {
        
    }
    
})