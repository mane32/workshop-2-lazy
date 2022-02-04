
const isIntersecting = (entry) => {
    return entry.isIntersecting
};
const accion = () => {
console.log("holis");
};

const observer = new IntersectionObserver((entries) => {
entries.filter(isIntersecting).forEach(accion);
});
//
export const registerImage = (imagen) => {
    //IntersectactionObservador -> observer(imagen)
    observer.observe(imagen);
};