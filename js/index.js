const contenido = document.getElementById('contenido');
const parrafo = document.getElementById("parrafo");


document.addEventListener("click",(e)=>{
    e.preventDefault();
    const html = generarHTML();

    if(!document.getElementById('card')){
    contenido.innerHTML = "";
    contenido.insertAdjacentHTML("afterbegin",html);
  }

    if(e.target.id == "borrar") {
      let confirma  = confirm("¿Seguro desea eliminar nota?");
      if(confirma){
      contenido.remove();
      }
    }

    if(e.target.id == "agregar") {
      if(!document.getElementById('fecha')){
        const nota = document.getElementById("notaC");
        const html = `<section class='form__seccion'>
              <input type="date" name="fecha"  class='form__seccion__input' id="fecha" />
             </section>`;
         nota.insertAdjacentHTML("beforeend",html);
     }
    }   
    
});



function generarHTML(){
 const card = `
 <main id="contenido">
 <div id="card">
 <form action="" class='form'>
   <section class='form__seccion'>
     <input
       type="text"
       name="titulo"
       class='form__seccion__input'
       id="titulo"
       placeholder="Ingresa un titulo"
     />
   </section>

   <section id="notaC" class='form__seccion'>
     <textarea
       name="nota"
       id=""
       class='form__seccion__input'
       cols="30"
       rows="10"
       placeholder="Escribe aqui"
     ></textarea>
   </section>

   <section class='form__seccion'>
     <button id="borrar" class='form__boton' type="submit">
       <i class="fa fa-trash" aria-hidden="true"></i>Borrar nota
     </button>
   
     <button id="agregar" class='form__boton' type="submit">
       <i class="fa fa-calendar" aria-hidden="true"></i>Agregar Fecha
     </button>
   </section>
 </form>
</div>
</main>
 `;

 return card;
}


