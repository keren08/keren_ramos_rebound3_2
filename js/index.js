const contenido = document.getElementById('contenido');
const parrafo = document.getElementById("parrafo");


document.addEventListener("click",(e)=>{
    const html = generarHTML();
    contenido.innerHTML = "";
    contenido.insertAdjacentHTML("afterbegin",html);

    if(e.target.id == "borrar") {
      let confirma  = confirm("¿Seguro desea eliminar nota?");
      if(confirma){
      contenido.remove();
      }
    }

    if(e.target.id == "agregar") {
      if(!document.getElementById('fecha')){
        const nota = document.getElementById("notaC");
        const html = `<section>
              <input type="date" name="fecha" id="fecha" />
             </section>`;
         nota.insertAdjacentHTML("beforeend",html);
     }
    }   
    
});



function generarHTML(){
 const card = `
 <main id="contenido">
 <div id="card">
 <form action="">
   <section>
     <input
       type="text"
       name="titulo"
       id="titulo"
       placeholder="Ingresa un titulo"
     />
   </section>

   <section id="notaC">
     <textarea
       name="nota"
       id=""
       cols="30"
       rows="10"
       placeholder="Escribe aqui"
     ></textarea>
   </section>

   <section>
     <button id="borrar" type="submit">
       <i class="fa fa-trash" aria-hidden="true"></i>Borrar nota
     </button>
   
     <button id="agregar"  type="submit">
       <i class="fa fa-calendar" aria-hidden="true"></i>Agregar Fecha
     </button>
   </section>
 </form>
</div>
</main>
 `;

 return card;
}


