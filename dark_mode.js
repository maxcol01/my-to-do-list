document.addEventListener("DOMContentLoaded", ()=>{
    const activateDarkMode = function (){
        toggleDarkModeBtn.classList.remove("fa-toggle-off");
        toggleDarkModeBtn.classList.add("fa-toggle-on")
        document.body.classList.add("dark-mode");
        themeState.innerText = "Light Mode";
        localStorage.setItem("isDark", "true");
    }

    const deactivateDarkMode = function (){
        toggleDarkModeBtn.classList.remove("fa-toggle-on");
        toggleDarkModeBtn.classList.add("fa-toggle-off")
        document.body.classList.remove("dark-mode");
        themeState.innerText = "Dark Mode";
        localStorage.setItem("isDark", "false");
    };
    // Element to interact with
    const toggleDarkModeBtn = document.getElementById("toggle-btn");
    const themeState = document.getElementById("theme-state");

    // Toggling dark mode
    let isDark = localStorage.getItem("isDark");
    if (isDark === "true"){
        activateDarkMode();
    }else{
        deactivateDarkMode();
    }
    toggleDarkModeBtn.addEventListener("click", (key, value) =>{
        if (toggleDarkModeBtn.classList.contains("fa-toggle-off")){
            activateDarkMode();
        } else {
            deactivateDarkMode();
        }

    });
});
