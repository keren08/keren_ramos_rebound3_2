
$('#escribir').click(function(){
    const html = generarHTML();
   $('#contenido').replaceWith(html);
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
     <button onclick="borrar();" type="submit">
       <i class="fa fa-trash" aria-hidden="true"></i>Borrar nota
     </button>
   
     <button  onclick="agregarF();"  type="submit">
       <i class="fa fa-calendar" aria-hidden="true"></i>Agregar Fecha
     </button>
   </section>
 </form>
</div>
</main>
 `;

 return card;
}

function agregarF(){
   event.preventDefault();
   if(!document.getElementById('fecha')){
   const html = `<section>
         <input type="date" name="fecha" id="fecha" />
        </section>`;
    $('#notaC').after(html);
}
};



function borrar(){
    event.preventDefault();
    $('#contenido').empty();
};