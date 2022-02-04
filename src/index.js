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
  const createImageNode= () => {
    const container = document.createElement("div");
    container.className = "p-4";

      const imagen = document.createElement('img');
      imagen.className = "mx-auto";
      imagen.width = "320";
      imagen.src = "https://randomfox.ca/images/2.jpg"; //TODO

      container.appendChild(imagen);
      return imagen;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images").appendChild(nuevaImagen);
//agregar a contenedor imagen

