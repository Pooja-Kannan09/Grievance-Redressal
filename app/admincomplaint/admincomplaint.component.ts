import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincomplaint',
  templateUrl: './admincomplaint.component.html',
  styleUrls: ['./admincomplaint.component.css']
})
export class AdmincomplaintComponent {

  complaintID:string="";
  c_email:string="";
  c_subject:string="";
  c_dept:string="";
  c_content:string="";
  c_status:string="";

  solution:string='';

  complt:any[]=[];

  constructor(private router: Router,private http: HttpClient) { }
  ngOnInit():void{
   this. getAll();
  }

  getAll() {

    this.http.get("http://localhost:9992/user/getAll")
    .subscribe((resultData: any)=>
    {
      let i:number =0;
      for(i=0;i<resultData.data.length;i++)
      {
          this.complt[i]=Object.assign({},resultData.data[i]);
          console.log(this.complt[i]);
           
          
      }
    });
  }
 sendSolution(compid:string){

         alert("hello")
           this.router.navigate(['/solution'],{queryParams:{data:compid}});
    }

}
