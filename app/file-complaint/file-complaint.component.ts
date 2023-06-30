import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-file-complaint',
  templateUrl: './file-complaint.component.html',
  styleUrls: ['./file-complaint.component.css']
})
export class FileComplaintComponent {
  email: string ='';
  subject: string ='';
  dept:string='';
  content:string='';
  complt:any[]=[];
  count:number=0;
  isUploaded: boolean = false;
  erroMessage: string = "";
  usermail:string="";
  constructor(private router: Router,private http: HttpClient,private route:ActivatedRoute) {

    console.log("helo");

    //email:string="";
    
      this.route.queryParams.subscribe((params:any)=>{
        this.usermail=params.data;
      })

    this.http.get("http://localhost:9992/user/getAll")
    .subscribe((resultData: any)=>
    {
      let i:number =0;
      for(i=0;i<resultData.data.length;i++)
      {
          this.complt[i]=Object.assign({},resultData.data[i]);
          console.log(this.complt[i]);
          this.count++;
           
          
      }
    });
    
  }


  
  public sendComplaint() {
    
    
  let bodyData = {
    complaintID:String(this.count),
    email: this.usermail,
    subject: this.subject,
    dept:this.dept,
    content:this.content
  };
  console.log("hai");
  /*console.log(this.name);
  console.log(this.email);
  console.log(this.password);*/

      this.http.post("http://localhost:9992/student/filecomplaint",bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.status)
      {
        this.isUploaded=true;
        alert("Complaint submitted Successful")
        
        this.router.navigate(['/userhome']);
      }
      else
       {
        alert("Invalid details")
        console.log("Errror login");
      }
    });

    //sending complaint
    {
      
      let userdata={
        email:this.usermail
      }

      this.http.post("http://localhost:9992/sendMail",userdata).subscribe(
        data =>{
          let res:any=data;
          console.log("mail send");
        },
        err=>{
          console.log(err);
          
        },()=>{
          
        }
      );  
    }
  }

}