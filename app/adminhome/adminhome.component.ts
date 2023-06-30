import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  
  complaintID:string="";
  c_email:string="";
  c_subject:string="";
  c_dept:string="";
  c_content:string="";
  c_status:string="";

  count:number=0;
  complt:any[]=[];

  email:string="";

  logout(){
    localStorage.clear();
    this.router.navigate(['mainhome']);
  }
  constructor(private router: Router,private http: HttpClient,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe((params:any)=>{
      this.email=params.data;
    })
  }
  ngOnInit():void{
   this. getAll();
   this.getCusAll();
  }

  getAll() {

    this.http.get("http://localhost:9992/user/getAll")
    .subscribe((resultData: any)=>
    {
        let i:number =0;
        for(i=0;i<3;i++)
        {
            this.complt[i]=Object.assign({},resultData.data[i]);
            console.log(this.complt[i]);
             
            
        }
      
    });
    }
    name:string="";
    cemail:string="";
    password:string="";
  
    cus:any[]=[];
  
    getCusAll(){
      this.http.get("http://localhost:9992/customer/getAll")
    .subscribe((resultData: any)=>
    {
      let i:number =0;
      for(i=0;i<3;i++)
      {
        if(String(resultData.data[i].name)!="admin"){
          this.cus[this.count]=Object.assign({},resultData.data[i]);
          this.count++;
        }
      }
    });
    }

}
