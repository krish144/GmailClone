const messageBox=document.querySelectorAll(".message-box");

const messageTime=document.querySelectorAll(".timing")

const messageIcons=document.querySelectorAll(".icons")

const hoverDots=document.querySelectorAll(".hover-dots");

console.log(messageTime)

messageBox.addEventListener("mouseover",()=>{
    hoverDots.style.visibility="visible"
})

messageBox.addEventListener("mouseout",()=>{
    hoverDots.style.visibility="hidden"
    messageTime.style.display="block";
    messageIcons.style.display="none";
})