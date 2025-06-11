document.addEventListener("DOMContentLoaded", ()=>{


    // Determining the number of page for the table

    // Date on the footer
    const dateSpan = document.getElementById("date-footer");
    let date = new Date();
    dateSpan.innerText = String(date.getFullYear());
})