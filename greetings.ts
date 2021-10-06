import { userInfo } from "os";

class User {
    first_name: string;
    last_name: string;

    constructor() {
        console.log('constructor');
        let btn = document.getElementById("ts_greet");
        console.log(btn);
        btn.addEventListener("click", (e:Event) => this.Greet(e));
        console.log('button bound!');
    }

    Greet(e: Event) {
        // let first_name = document.getElementById('ts_user_first_name').value;
        // let last_name = document.getElementById('ts_user_last_name').value;

        let first_name = (<HTMLInputElement>document.getElementById('ts_user_first_name')).value;
        let last_name = (<HTMLInputElement>document.getElementById('ts_user_last_name')).value;

        let user_name = first_name + ' ' + last_name;
        let dif_ts_hello = document.getElementById('div_ts_hello');
        dif_ts_hello.innerText = "Hello " + user_name + "! From Javascript"; 
    }

    TSHello(e: Event) {
        let message: string = 'Hello World by Type Script!'
        console.log(message);;
    }
}


  
// start the app
new User();

