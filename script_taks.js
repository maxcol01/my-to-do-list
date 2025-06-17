document.addEventListener("DOMContentLoaded", ()=>{



    // Automatically setting the date
    const dateSpan = document.getElementById("date-footer");
    let date = new Date();
    dateSpan.innerText = String(date.getFullYear());
})