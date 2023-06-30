import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsolve',
  templateUrl: './adminsolve.component.html',
  styleUrls: ['./adminsolve.component.css']
})
export class AdminsolveComponent {
  cid:string='';
  email: string ='';
  subject: string ='';
  dept:string='';
  content:string='';
  solution:string='yet to resolve';

  isUploaded: boolean = false;
  erroMessage: string = "";

  constructor(private router: Router,private http: HttpClient) {
    console.log("helo");
  }

  
  public sendSolution(){
    let bodyData = {
      cid:this.cid,
      email: this.email,
      subject: this.subject,
      dept:this.dept,
      content:this.content,
      solution:this.solution
    };
    console.log("hai");
    /*console.log(this.name);
    console.log(this.email);
    console.log(this.password); */

        this.http.post("http://localhost:9992/student/createSolution",bodyData).subscribe((resultData: any) => {
        console.log(resultData);
 
        if (resultData.status)
        {
          this.isUploaded=true;
          alert("Solution uploaded")
          this.router.navigate(['/admincomplaint']);
        }
        else
         {
          alert("Invalid details")
          console.log("Errror login");
        }
      });
    }
}
