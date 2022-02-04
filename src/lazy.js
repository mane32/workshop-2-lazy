const isIntersecting = (entry) => {
    return entry.isIntersecting;
};
const loadImage = (entry) => {
    const container = entry.target; //contenedor (DIV)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //carga la imagen
    imagen.src = url;

// des registra la imagen
observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
entries.filter(isIntersecting).forEach(loadImage); //
});
//
export const registerImage = (imagen) => {
    //IntersectactionObservador -> observer(imagen)
    observer.observe(imagen);
};