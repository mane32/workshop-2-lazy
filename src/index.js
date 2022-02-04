/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

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
      imagen.src = `https://randomfox.ca/images/${random()}.jpg`; //TODO

      container.appendChild(imagen);
      return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images"); //.appendChild(nuevaImagen);

const addButton = document.querySelector("button");
const accion = () => console.log("hey");


addButton.addEventListener("click", accion);


mountNode.append(nuevaImagen);

   

