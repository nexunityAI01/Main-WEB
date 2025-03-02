
export const InteractividadHamburguesa = () => {
    const encontrandoBotonHamburguesa = document.querySelector(".boton-hamburguesa")
    const encontrandoNavHeader = document.querySelector(".nav-responsive")

    encontrandoBotonHamburguesa.addEventListener("click", () => {
        encontrandoNavHeader.classList.toggle("agregando-clase_nav")
    
    });
    
    return InteractividadHamburguesa()
}





