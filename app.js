const themeToggler=document.querySelector(".daynight-btn");
themeToggler.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme-variables");
    const is_dark_mode=document.body.classList.contains(
        "dark-theme-variables"
    )
    window.localStorage.setItem("dark-mode",is_dark_mode)
});