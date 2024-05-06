const btn=document.querySelector(".btn")
let theme="light";
btn.textContent="Koyu"
btn.addEventListener("click",()=>{
if(theme==="light"){
document.documentElement.classList.add("dark-theme")//html etiketini seçer
btn.textContent="Açık"
theme="dark";
}
else if(theme=="dark")
    {

        document.documentElement.classList.remove("dark-theme");
        btn.textContent="Koyu"
        theme="light";
    }
        
})