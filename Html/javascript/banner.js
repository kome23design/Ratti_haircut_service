const banner=async()=>{
    const data = await fetch("../data2.json",{
        method:'GET',
        headers:{'content-Type':'application/json'}
    })
    .then((res)=>res.json())
    return data
}
let image=document.querySelector(".img_class")
let e=0
setInterval(async function(){
    e++
    const datafxn = await banner()
    if (e>=datafxn.length){
        e=0
    }
    // console.log(datafxn[e].image)
    image.src="../images/"+datafxn[e].image
},3000)