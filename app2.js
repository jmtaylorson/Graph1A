  var APP_ID = 'D8A9CC24-CE48-279A-FFA9-85B03E507000';
var API_KEY = 'AE635105-3DFF-11C9-FF02-394AD2FE8000';
var email = '1'; 
var password = '1';
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

function check(form) {
    email = document.getElementById("email").value;
        password = document.getElementById("password").value;

     function userLoggedIn( user )
{
  console.log( "user has logged in" );
}
 
function gotError( err ) // see more on error handling
{
  console.log( "error message - " + err.message );
  console.log( "error code - " + err.statusCode );
}
 
Backendless.UserService.login( email, password, true )
 .then( userLoggedIn )
 .catch( gotError );
  }




            