document.addEventListener("DOMContentLoaded", ()=>{
    // Elements to interact with 
    const toggleDarkModeBtn = document.getElementById("toggle-btn");
    const themeState = document.getElementById("theme-state");
    
    // Toggling dark mode
    let isDark = localStorage.getItem("isDark");
    toggleDarkModeBtn.addEventListener("click", (key, value) =>{
        if (isDark === "false"){
            toggleDarkModeBtn.classList.remove("fa-toggle-off");
            toggleDarkModeBtn.classList.add("fa-toggle-on")
            document.body.classList.add("dark-mode");
            themeState.innerText = "Light Mode";
            localStorage.setItem("isDark", "true");
        } else if (isDark === "true"){
            toggleDarkModeBtn.classList.remove("fa-toggle-on");
            toggleDarkModeBtn.classList.add("fa-toggle-off")
            document.body.classList.remove("dark-mode");
            themeState.innerText = "Dark Mode";
            localStorage.setItem("isDark", "false");
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