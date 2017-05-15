var APP_ID = 'D8A9CC24-CE48-279A-FFA9-85B03E507000';
var API_KEY = 'AE635105-3DFF-11C9-FF02-394AD2FE8000';
var email = '1';
var password = '1';
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

function check(form) {
    email = document.getElementById("email").value;
        password = document.getElementById("password").value;
   
    Backendless.Data.of(Backendless.User).save( { email:email, password:password } )
    .then( function( obj ) {
        console.log( "object saved. objectId " + obj.objectId )
    } )
    .catch( function( error ) {
        console.log( "got error - " + error )
    })
     
  }



            