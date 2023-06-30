import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

 

  signupForm!: FormGroup;
  submitted = false;
  //x: string: any;
  name:string='';
  email: string ='';
  password: string ='';
  confirmpassword:string='';

  isCreate: boolean = false;
  erroMessage: string = "";

  constructor(private router: Router,private http: HttpClient,private formBuilder: FormBuilder) {
    console.log("helo");
  }
  /*ngOnInit() {
    this.signupForm = this.formBuilder.group({
       // firstName: ['', Validators.required],
        //lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        //password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.signupForm.controls; }*/

  public signup() {
    
    if(this.name!='' &&this.email!=''&&this.password!=''&&this.confirmpassword!=''){

      if(this.password==this.confirmpassword){

        /*this.submitted = true;
        if (this.signupForm.invalid) {
          return;
        }*/
  
        let bodyData = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
  
        console.log("Processing sign up .....");
            this.http.post("http://localhost:9992/student/create",bodyData).subscribe((resultData: any) => {
            console.log(resultData);
     
            if (resultData.status)
            {
              this.isCreate=true;
              alert("Signup Successful")
              this.router.navigate(['/mainhome']);
            }
            else
             {
              alert("Invalid details")
              console.log("Errror login");
            }
          });
      }else{
        alert("Enter correct password");
      }
      
    }else{
            alert("Please fill all fields");
    }
  }
    
}
