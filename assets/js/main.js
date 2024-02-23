console.log("hello world");

let imageList = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"] // array di immagini

console.log(imageList);

let prev = document.querySelector(".prev")
let next = document.querySelector(".next")


for (let i = 0; i < imageList.length; i++) { // ciclo per lo scorrimento
    const singleSlide = imageList[i];
    
    console.log(singleSlide);
}

