

function JSHello() {
    let div_js_hello = document.getElementById('div_js_hello');
    // var divs = document.getElementsByTagName('div');
    console.log('Hello');
    console.log(div_js_hello);
    // console.log(divs);
    div_js_hello.innerText = "Hello World! From Javascript";
}

function GreetUser() {
    let capitalize = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    let user_first_name = capitalize(document.getElementById('user_first_name').value);
    let user_last_name = capitalize(document.getElementById('user_last_name').value);

    console.log(user_first_name, user_last_name);

    let user_name = user_first_name + ' ' + user_last_name;
    let dif_js_hello = document.getElementById('div_js_hello');
    div_js_hello.innerText = "Hello " + user_name + "! From Javascript";
}

window.onload = function() {
    JSHello();
}