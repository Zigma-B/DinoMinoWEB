
//metodo de resivir informacion del servidor con axios 
$(document).ready(function(){    
  
  $.ajax({
    url:"/home/getStatus",
    method:"post",
    success:function(res){
      console.log(res.s)
      let btn = "";
      let result = document.querySelector('#btnOptions');


      if(res.s.length===0){
        btn+=`
          <a href="/"><button type="button" class="btn btn-outline-primary">Iniciar sesión </button></a>
        `
        result.innerHTML = btn;
      }else{
        btn+=`
          <a class="btn btn-danger" id="btnLogOut" href="/">Cerrar sesion <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
          <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
          <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
          </svg></a>
    
        `;
  
        result.innerHTML = btn;
      }
    }
  })
  
  //obtener todos los datos
    const getAll = async()=>{
      try {
        const url = '/home/top'
    
        let res = await axios.get(url);
        let json = await res.data;
        let datos = "";
        let resultado = document.querySelector('#tbody');
        
        json.all.forEach(element => {
          datos+=`
          <tr>
          <td style="background-color: #E9FFE5;"><center><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg></center></td>
        <td class="nombre" style="background-color: #E9FFE5;">${element.name}  </td>
        <td class="puntuacion" style="background-color: #E9FFE5;">${element.score} puntos</td>
        <td class="tiempo" style="background-color: #E9FFE5;">N/A hr</td>
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


      $(document).on('click', '#btnLogOut', function(evnt){
          evnt.preventDefault();

        $.ajax({
          url:"/home/status",
          method:"post",
          success:function(res){
            console.log(res)
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
