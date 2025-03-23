
// const afficheUser = async (e) => {
//     const list = await fetch("../data2.json", {
//         method: "GET",
//         headers: {
//             "content-type": "application/json",
//         }
//     })
//         .then((res) => res.json());
//     return list;
// }

// const displayAnonc = async (positions) => {
//     const data = await afficheUser()
//     console.log(data)

//     const art_tag=document.querySelector(".view")

//     const dataa = data.filter(e => e.position === positions)
//     const id_tag = document.getElementById("id")
//     art_tag.appendChild(id_tag)
//     id_tag.innerHTML = dataa[0].id

//     const image_tag = document.createElement("img")
//     art_tag.appendChild(image_tag)
//     image_tag.src = dataa[0].image

//     nameimg.innerHTML = dataa[0].name 
// }
// displayAnonc()

const hairstyles=async()=>{
    const infos=await fetch("../data.json",{
        method:'GET',
        headers:{'content-Type':'application/json'}
    })
    .then((res)=>res.json())
    return infos
}
const hairstyledisplay = async()=>{
    const details = await hairstyles()
    console.log(details)
    for(let i=0;i<details.length;i++){

        const displayhair=document.querySelector("#hair_id")
        const art_tag=document.createElement("article")
        art_tag.classList.add("arthair")
        displayhair.appendChild(art_tag)

        const img_tag=document.createElement("img")
        art_tag.appendChild(img_tag)
        img_tag.src="./images/"+details[i].image

        const p_tag=document.createElement("p")
        art_tag.appendChild(p_tag)
        p_tag.innerHTML=details[i].name

    
    }
}
hairstyledisplay()

const init_emailjs=()=>{
    emailjs.init("WiPG5lvnKvJrFeLYm");
};
init_emailjs()
document.getElementById("form_id").addEventListener("submit", function(event){
    event.preventDefault()
    const inputnameinfos=document.getElementById("name_id").value
    const inputemailinfos=document.getElementById("email_id").value
    const inputmsginfos=document.getElementById("msg").value
    console.log(inputmsginfos, inputnameinfos, inputemailinfos)

    const service_id="service_wjvbkef"
    const template_id="template_2jo9adk"
    emailjs.sendForm(service_id, template_id, this).then(
        (response)=>{
            console.log("successful",response.statue,response.text)
            alert("Your message was successfuly sent")
        },
        (error)=>{
            console.log("error",error)
            alert("Failed to send message")
        }
    );
});