const imagesrc=document.querySelector(".imagesrc")
let resimlerİmg=document.querySelectorAll(".aresim")
const urunDetaySldr=document.querySelectorAll(".urunDetaySldr")

resimlerİmg.forEach((resim)=>{

resim.addEventListener("click",()=>{

imagesrc.src=resim.src    

})

})

resimlerİmg.forEach((resim)=>{

    resim.addEventListener("click",()=>{
    
    imagesrc.src=resim.src    
    
    })
    
    })


/* Sepete Ekle */
const container=document.querySelector(".container")
const btn=document.getElementById("btn")
let eleman;
let sayi=0;
btn.addEventListener("click",()=>{


    
if(sayi===0){

     eleman=document.createElement("p")
    eleman.classList.add("pclasst")
    eleman.textContent="Sepete Eklendi"
    container.appendChild(eleman)
    eleman.style.display="block"
    sayi=1
}
         

setTimeout(()=>{

    if (sayi===1) {
        
        container.removeChild(eleman)
        eleman.style.display="none"
        sayi=0;
    }

},1000)




})









































































































































/*const imagesrc=document.querySelector(".imagesrc")
let resimlerİmg=document.querySelectorAll(".aresim")
const urunDetaySldr=document.querySelectorAll(".urunDetaySldr")





resimlerİmg.forEach((resim)=>{

resim.addEventListener("click",()=>{

imagesrc.src=resim.src    

})

}) 

const imagesrc=document.querySelector(".imagesrc")
let resimlerİmg=document.querySelectorAll(".aresim")
const urunDetaySldr=document.querySelectorAll(".urunDetaySldr")

urunDetaySldr.forEach((urunrengisec,index)=>{
    urunrengisec.addEventListener("click",()=>{
        switch(index){
case 0:
  
resimlerİmg.forEach((resim)=>{
    imagesrc.src="https://images.theengineeringprojects.com/image/main/2020/01/Switch-Statment-in-JavaScript-1.jpg"
    

    resim.addEventListener("click",()=>{
    
    
    })
    
    })





break;
case 1:
   
break;
case 2:alert(index);
break;
case 3:alert(index);
break;
        }
    })
})


*/









