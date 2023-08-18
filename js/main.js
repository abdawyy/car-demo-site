let btnone=document.getElementById("one")
let btntwo=document.getElementById("two")
let btnthree=document.getElementById("three")
let btnfour=document.getElementById("four")
let btnfive=document.getElementById("five")
let image=document.getElementById("img-client")
let nameCli=document.getElementById("client-name")
let contentCli=document.getElementById("client-cont")
let one=()=>{
    image.src="images/clients/WhatsApp Image 2023-08-17 at 18.39.51.jpeg"
    contentCli.innerHTML="Jake takes such pride in each and every detail he does for our cars. Almost weekly now for several years, he comes to our house and takes great care to deliver us a sparkling clean, and perfectly detailed car. What is most impressive about Jake is the way he runs his business. He does what he says he is going to do…each and every time. It's impossible not to reward him and his incredible business with a wholehearted 110% recommendation to others who are in search of quality auto detailing, excellent service, and a trustworthy person/owner in charge of it all."
    nameCli.innerHTML="Micheal & Traci"
    btnone.classList.add("redcol")
    btntwo.children.remove("redcol")
    btnthree.classList.remove("redcol")
    btnfour.classList.remove("redcol")
    btnfive.classList.remove("redcol")
}
let two=()=>{
    btnthree.classList.remove("redcol")
    btnfour.classList.remove("redcol")
    btnfive.classList.remove("redcol")
    btnone.classList.remove("redcol")
    btntwo.classList.add("redcol")
    image.src="images/clients/WhatsApp Image 2023-08-17 at 18.39.52.jpeg"
    nameCli.innerHTML="Bill"
    contentCli.innerHTML=" I have used several Auto Detailing Companies since moving to Florida 8 years ago, but nobody does the exceptionally high quality work performed by True Detail, and owner Jake Cline. The cars look as though they just came off the clear coat paint line at the manufacturer. Jake is fastidious about washing every part of the car, and power drying to ensure no water spots appear after drying. As good as the workmanship is, you will not find a better more dedicated individual than Jake. I would highly recommend True Detail!"
  
}
let three=()=>{
    btnone.classList.remove("redcol")
    btntwo.classList.remove("redcol")
    btnthree.classList.add("redcol")
    btnfour.classList.remove("redcol")
    btnfive.classList.remove("redcol")
    nameCli.innerHTML="sarah"
    image.src="images/clients/WhatsApp Image 2023-08-17 at 18.39.53 (1).jpeg"
    contentCli.innerHTML="What a pleasure dealing with this company! My car looks better than the day I picked it up from the dealership. The convenience of coming to my home was amazing. Spectacular job. Use this company, you will be very happy with theservice. Job well done!"

}
let four=()=>{
    btnone.classList.remove("redcol")
    btntwo.classList.remove("redcol")
    btnthree.classList.remove("redcol")
    btnfour.classList.add("redcol")
    btnfive.classList.remove("redcol")
    nameCli.innerHTML="Jordan"
    image.src="images/clients/WhatsApp Image 2023-08-17 at 18.39.53.jpeg"
    contentCli.innerHTML=" What a pleasure dealing with this company! My car looks better than the day I picked it up from the dealership. The convenience of coming to my home was amazing. Spectacular job. Use this company, you will be very happy with the service. Job well done! "

}
let five=()=>{
    btnone.classList.remove("redcol")
    btntwo.classList.remove("redcol")
    btnthree.classList.remove("redcol")
    btnfour.classList.remove("redcol")
    btnfive.classList.add("redcol")
    nameCli.innerHTML="Tim korner"
    contentCli.innerHTML="For years now, I have relied upon the first rate skills of True Detail’s Jacob Cline to take care of my car’s appearance. He is simply amazing. My cars have never looked better, and his dedication shines as brightly as my auto’s paint. Reasonably priced, dependable and very pleasant to interact with, I truly look forward to my appointments with him. Top shelf service with a smile, couldn’task for better."
    image.src="images/clients/homepage-review-1.7207fa5.webp"
}

btnone.addEventListener("click",one())
btntwo.addEventListener("click",two())
btnthree.addEventListener("click",three())
btnfour.addEventListener("click",four())
btnfive.addEventListener("click",five())