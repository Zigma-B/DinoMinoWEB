
//metodo de resivir informacion del servidor con axios 
$(document).ready(function(){
  //obtener todos los datos
    const getAll = async()=>{
      try {
        const url = '/home'
    
        let res = await axios.get(url);
        let json = await res.data;
        let datos = "";
        let resultado = document.querySelector('#tbody');
        
        json.usuario.forEach(element => {
          datos+=`
          <tr>
          <td><center><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg></center></td>
        <td class="nombre" style="background-color: #9f7e67;">${element.nombre} ${element.apePaterno} ${element.apeMaterno} </td>
        <td class="puntuacion" style="background-color: #9f7e67;">${element.score} puntos</td>
        <td class="tiempo" style="background-color: #9f7e67;">${element.tiempo} hr</td>
          </tr>` 
        });
        resultado.innerHTML=  datos;
      } catch (error) {
        throw  error;
      }
    }
    //getAll();
    
    document.addEventListener("DOMContentLoad", getAll())

  
    //manera de resivir datos del servidor con ajax
      $(document).on('click', '#btnBuscar', function(){
        let buscar = $('#buscar').val();   
        $.ajax({
          url:'/home',
          method:'post',
          data: JSON.stringify({
            correo:$('#buscar').val()
        }),
            dataType:'json',
            contentType:'application/json',
            success:function(res){

              console.log(res.r.length)
              if(res.r.length!=0){
                
                let datos ="";
                let resultado = document.querySelector('#tbody');
                res.r.forEach(element => {
                  
                 datos+=`
                 
             <tr>
               <td><center><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
               <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
               <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
               </svg></center></td>
               <td class="nombre" style="background-color: #9f7e67;">${element.nombre} ${element.apePaterno} ${element.apeMaterno} </td>
               <td class="puntuacion" style="background-color: #9f7e67;">${element.score} puntos</td>
               <td class="tiempo" style="background-color: #9f7e67;">${element.tiempo} hr</td>
             </tr>
                 
                 `
                });
 
                  resultado.innerHTML=  datos;
              }else{
                alert('No existe usuario con ese correo')
              }

             }
        });
  
      });

});



















/*function getDatosSearch(){
  const url = '/home'
  
  return axios.get(url)
            .then(respuesta => respuesta.data)
  
}


let d = getDatos();
console.log(d);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

*/
