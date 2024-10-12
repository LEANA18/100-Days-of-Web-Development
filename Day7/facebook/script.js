$(document).ready(function(){
    $("#signup").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            lname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true

            },
            password:{
                minlength:6,
            },
            day:{
                required:true,
            },
            month:{
                required:true,
            },
            year:{
                required:true
            },
            sex:{
                required:true,
            }


        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Enter atleast 4 characters"
            },
            lname:{
                required:"Enter last name",
                minlength:"Enter atleast 4 characters"
            },
            email:{
                required:"Enter Email address",
                email:"Enter valid Email address"
            }
        }    })
})