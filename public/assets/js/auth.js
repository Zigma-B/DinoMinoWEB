
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')//se hace el registro del serviceWorker
    .then(reg=>{//promesa de instalación 
        //Mostrar una notificacion push va adentro del registro por que es necesario usar el reg para madnar el push
        Notification.requestPermission().then(result=>{
            //mensaje del push
            reg.showNotification('Aplicacion lista y funcionando');

        });
    });

}





$(function(){

    $(document).on('click', '#logIn', function (evt) {
        evt.preventDefault();
           $.ajax({
            url:'/api/auth/login',
            method:'post',
            data: JSON.stringify({
                correo:$('#Lcorreo').val(),
                password:$('#Lpassword').val() 
            }),
            dataType:'json',
            contentType:'application/json',
            success:function(res){
               //console.log(res.token);
               if(res){
                   window.location='/home.html';
               }
             },
        }).fail(function(err) {
            if(err.responseJSON.errors){
                for (const key in err.responseJSON.errors) {
                    
                        const element = err.responseJSON.errors[key];
                        alert(element.msg)
                        
                }
            }else if (err.responseJSON.errors=== undefined) {
                alert('usuario o contraseña incorrecto')
            }else{
                alert('no es un correo valido')
            } 
          });
          /*
        $.ajax({
            method: "POST",
            url: "/api/auth/login",
            data: JSON.stringify({
                correo:$('#Lcorreo').val(),
                contrasena:$('#LPassword').val() 
            })
          }).done(function(data) {

            alert(data); // imprimimos la respuesta
          }).fail(function() {
            alert("Algo salió mal");
          });*/
    });

    $(document).on('click', '#logIn', function(){
        $.ajax({
            url:"/api/auth/status",
            method:"post",
            success:function(res){
            console.log(res)
          }
        });


    })
    
});


