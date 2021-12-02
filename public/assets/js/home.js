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
      <td class="nombre"></td>
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


getAll();

document.addEventListener("DOMContentLoad", getAll)











/*function getDatos(){
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
