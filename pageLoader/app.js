function showLoader(){
    document.getElementById("loader").style.display="block"

}
function hideLoader(){
    document.getElementById("loader").style.display="none"
}
const myButton=document.getElementById("myButton");

myButton.addEventListener("click",()=>{
myButton.style.display="none"
showLoader()
setTimeout(()=>{
    hideLoader()
const containerContent=document.querySelector("img").style.display="block"


},1500)
})