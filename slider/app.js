const imagefull = document.querySelector(".imgfull")
let resimSec = document.querySelectorAll(".imgresim")
let text = document.querySelectorAll(".text")
let imgsmall = document.querySelector(".imgsmall")
let meyveler=["Birinci  Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
"ikinci itabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
"üçüncü Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum ",
"dört Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.",
"beşşş   Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir."
]
let sonEklenenMetin = null;

resimSec.forEach(resimler => {

    resimler.addEventListener("click", () => {
        imagefull.src = resimler.src;
let sayi=Math.floor(Math.random()*5)
        let yazi = document.createElement('p');
        yazi.classList.add("text");
       yazi.innerHTML=meyveler[sayi]
        yazi.style.display = "block"
     
        if (sonEklenenMetin !== null) {
            imgsmall.removeChild(sonEklenenMetin);
        }


        imgsmall.appendChild(yazi)
        sonEklenenMetin = yazi;

    })


       
     
})


