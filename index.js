// Menu 

 $('#menu-icon').click(()=>{
   $('#nav-links').toggle(1000);

 })


// form//
$("#signUp-btn").click(()=>{
  $("#signUp-form").show("show",()=>{
    $("#login-form").hide();
  });
})



$("#login-btn").click(()=>{
  $("#login-form").show(()=>{
    $("#signUp-form").hide();
  });
})

// from close
$('#closeS').click(()=>{
  $('#signUp-form').hide();
})

$('#closeL').click(()=>{
  $('#login-form').hide();
})



// from data


     var form = document.querySelector('#signUp-form');
     var name = document.querySelector('#name');
     var email = document.querySelector('#email');
     var password1 = document.querySelector('#password1');
     var password2 = document.querySelector('#password2');


     form.addEventListener('submit',()=>{

      console.log(name.value);
      console.log(email.value);
      console.log(password1.value);
      console.log(password2.value);

      console.log(name.value="");
      console.log(email.value="");
      console.log(password1.value="");
      console.log(password2.value="");
    
     })


    
     var login_from = document.querySelector('#signUp-form');
     var lname = document.querySelector('#Lname');
     var lpassword = document.querySelector('#Lpassword');

     function btn() {
      console.log(lname.valu);
       console.log(lpassword.valu);

       console.log(lname.valu="");
       console.log(lpassword.valu="");
      
     }

// var signUpName = document.querySelector("#inputUser-name");
// var signUpEmail = document.querySelector("#inputUser-email");
// var password1 = document.querySelector("#inputUser-password1");
// var password2 = document.querySelector("#inputUser-password2");
// var btnsignUp = document.querySelector("#btnsignUp");
// var RSmessage = document.querySelector("#RSmessage");

// btnsignUp.addEventListener("click", ()=>{

// 	if(signUpName=""; && signUpEmail=""; && password1 ="" && password2 ="" && password1 !===password2 )
// 	{
// 		RSmessage.textContent = "enter your data";
// 	}

// 	else{
//        RSmessage.textContent = "user registration successful";
// 	}

// });



//validation
// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }



