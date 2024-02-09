

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var authenticated = false;


    for (let i = 0; i < localdatabase.length; i++) {
        if(username === localdatabase[i].username && password === localdatabase[i].password){
            authenticated = true;
            break;
        }
    }

    if (authenticated) 
    {
        document.getElementById("loginstatus").innerHTML = "Login successful! Welcome";
        // Redirect to another website after a successful login
        setTimeout(function(){
            window.location.href = "main.htm";
        },1000)
           
    } 
    else {
        document.getElementById("loginstatus").innerHTML = "Login failed. Please check your credentials.";

    }



const data = [{ key: 'value', password: 'value' }];
    localStorage.setItem(_username, _password, JSON.stringify(data));

// Retrieve data from local storage
const savedData = JSON.parse(localStorage.getItem('myData'));
    console.log(savedData);


}


var registered = false;
const localdatabase = JSON.parse(localStorage.getItem('mydatabase')) || [];
function register(){
    let _username = document.getElementById("createusername").value;
    let _password =document.getElementById("createpassword").value;
    const newUser = { username: _username, password: _password };

    localdatabase.push(newUser);
    localStorage.setItem('mydatabase',JSON.stringify(localdatabase));

    console.log(localdatabase);
    alert("Success");
    registered= true;
    if(registered)
    {
        setTimeout(function(){
            window.location.href = "index.html";
        },1000)

    }
   

}

