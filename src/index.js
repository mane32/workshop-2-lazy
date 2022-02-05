import { registerImage } from "./lazy";

//crear imagen

   /* <div class="p-4">
    <img 
    class="mx-auto" 
    width="320" 
    src="https://randomfox.ca/images/2.jpg" 
    alt=""
    />
  </div>  */
  const maximum = 123;
  const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

  const createImageNode= () => {
    const container = document.createElement("div");
    container.className = "p-4";

      const imagen = document.createElement("img");
      imagen.className = "mx-auto";
      imagen.width = "320";
      imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; //TODO

      container.appendChild(imagen);
      return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images"); //.appendChild(nuevaImagen);

const addButton = document.querySelector("button");

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);

};

addButton.addEventListener("click", addImage);

//Boton para limpiar
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
  mountNode.innerHTML = "";
});


   

