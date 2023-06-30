import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ='';
  password: string ='';

  isLogin: boolean = false;
  erroMessage: string = "";

  constructor(private router: Router,private http: HttpClient) {
    console.log("helo");
  }
  
  public login() {
    
 
    let bodyData = {
      email: this.email,
      password: this.password,
    };
    console.log("hai");
    console.log(this.email);
    //console.log(this.password);

        this.http.post("http://localhost:9992/student/login",bodyData).subscribe((resultData: any) => {
        console.log(resultData);
 
        if (resultData.status)
        {
          this.isLogin=true;
          alert("Login Successful")
          
          if(this.email=="admin@gmail.com"){
            localStorage.setItem("email",this.email);
            localStorage.setItem("password",this.password);
            this.router.navigate(['/adminhome']);
          }
          else{
            localStorage.setItem("email",this.email);
            localStorage.setItem("password",this.password);
            this.router.navigate(['/userhome'],{queryParams:{data:this.email}});
          }
    
 
        }
        else
         {
          alert("Incorrect Email and Password")
          console.log("Errror login");
        }
      });
    }
}
