let correo = $('#Lcorreo');
let password = $('#LPassword');

console.log(password.val());
console.log(correo.val());

$(function(){
    
    $(document).on('submit', '#logIn', function (evt) {
        evt.preventDefault();
        
        $('#login-form').validate({
            rules:{
                correo:{
                    required: true,
                    email:true
                },
                password:{
                    required:true
                }
            },
            messages:{
                correo:{
                    required:"Llena este campo",
                    email:"Ingrese un correo valido"
                },password:{
                    required:"Llena este campo",
                    email:"No es un correo valido"
                }
            }
        });

        if($('#login-form').valid()) {
           $.ajax({
            url:'/api/auth/login',
            method:'post',
            data: JSON.stringify({
                correo:$('#Lcorreo').val(),
                contrasena:$('#LPassword').val() 
            }),
            dataType:'json',
            contentType:'application/json',
            success:function(res){
               console.log(res);
               if(res.t){
                   window.location='/home';
               }
            },
            error: function (err) {
                console.log(err.responseJSON.errors);
            }
        });
        }else{console.log(false);}
    });
});