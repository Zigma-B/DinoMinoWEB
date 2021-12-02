
$(function(){
    
    $(document).on('click', '#crearUsuario', function (evt) {
        evt.preventDefault();
           $.ajax({
            url:'/api/usuarios',
            method:'post',
            data: JSON.stringify({
                nombre:$('#nombre').val(),
                apePaterno:$('#apePaterno').val(),
                apeMaterno:$('#apeMaterno').val(),
                genero:$('#genero').val(),
                fNacimiento:$('#fNaciemto').val(),
                password:$('#password').val(),
                correo:$('#correo').val() 
            }),
            dataType:'json',
            contentType:'application/json',
            success:function(res){
               console.log(res);
               if(res){
                   window.location='/';
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
    });

    
});