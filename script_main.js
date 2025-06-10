document.addEventListener("DOMContentLoaded", ()=>{
    
    
    // Date on the footer
    const dateSpan = document.getElementById("date-footer");
    let date = new Date();
    dateSpan.innerText = String(date.getFullYear());
})