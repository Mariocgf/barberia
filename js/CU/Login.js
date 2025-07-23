
BTN_LOGIN.addEventListener("click", () => {
    DIV_GLOBAL.style.display = "none";
    LOGIN.style.display = "flex";
})

btnIngreso.addEventListener("click", () =>{

    if(EMAIL.value == usuAdmin.email && CONTRA.value == usuAdmin.password){
        LOGIN.style.display = "none";
        admin.style.display = "flex";
        btnLogout.style.display = "flex"
        BTN_LOGIN.style.display = "none"
        contenedorAdmin.style.display = "flex";
    }else{
        alert("Contraseña o usuario no valido")

    }

})

btnLogout.addEventListener("click", () =>{
    LOGIN.style.display = "flex";
    admin.style.display = "none";
    btnLogout.style.display = "none"
    BTN_LOGIN.style.display = "flex"
    contenedorAdmin.style.display = "none";
})