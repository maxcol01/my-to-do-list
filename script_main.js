document.addEventListener("DOMContentLoaded", ()=>{
    // Elements to interact with 
    const toggleDarkModeBtn = document.getElementById("toggle-btn");
    const themeState = document.getElementById("theme-state");
    
    // Toggling dark mode
    
    toggleDarkModeBtn.addEventListener("click", () =>{
        if (toggleDarkModeBtn.classList.contains("fa-toggle-off")){
            toggleDarkModeBtn.classList.remove("fa-toggle-off");
            toggleDarkModeBtn.classList.add("fa-toggle-on")
            document.body.classList.add("dark-mode");
            themeState.innerText = "Light Mode";
        } else {
            toggleDarkModeBtn.classList.remove("fa-toggle-on");
            toggleDarkModeBtn.classList.add("fa-toggle-off")
            document.body.classList.remove("dark-mode");
            themeState.innerText = "Dark Mode"; 
        }

    });
    
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