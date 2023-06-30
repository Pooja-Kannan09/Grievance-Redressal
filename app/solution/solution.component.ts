import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent {
  c_email:string="";
  c_subject:string="";
  c_dept:string="";
  c_content:string="";
  compId:string="";
  complt!:any;
  solution:string="";
  constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute){
    this.route.queryParams.subscribe((params:any)=>{
      this.compId=params.data;
    })

    this.http.get("http://localhost:9992/user/getAll")
    .subscribe((resultData: any)=>
    {
      let i:number =0;
      for(i=0;i<resultData.data.length;i++)
      {
        if(String(resultData.data[i].complaintID)==this.compId){
          
          this.complt=Object.assign({},resultData.data[i]);}
          //console.log(this.complt[i]);
        }
    });
  }

  sendSolution(){
    let bodyData={
      cid:this.compId,
      //rc_complaint:complt.c_content,
      rc_solution:this.solution
    }
    this.http.post("http://localhost:9992/addSolution",bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.status)
      {
        //this.isCreate=true;
        alert("Solution given for the complaint")
        //this.router.navigate(['/adminhome']);
      }
      else
       {
        alert("Error in giving solution")
        console.log("Errror login");
      }
    });
    let bodyData1={
      complaintID:this.compId
    }
    this.http.post("http://localhost:9992/update",bodyData1).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.status)
      {
        //this.isCreate=true;
        alert("Solution status updated")
        this.router.navigate(['/adminhome']);
      }
      else
       {
        alert("Error in updating  solution status")
        console.log("Errror update");
      }
    });

  }

}
