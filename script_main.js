document.addEventListener("DOMContentLoaded", ()=>{
    // Elements to interact with 

    
    
    
    // Determining the number of page for the table
    
    
    // Navigation of the table element
    document.getElementById("right-table-btn").addEventListener("click",()=>{
        alert("Right button clicked !")
    });
    
    
    // Date on the footer
    const dateSpan = document.getElementById("date-footer");
    let date = new Date();
    dateSpan.innerText = String(date.getFullYear());
})