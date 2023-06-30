import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincustomer',
  templateUrl: './admincustomer.component.html',
  styleUrls: ['./admincustomer.component.css']
})
export class AdmincustomerComponent {

  name:string="";
  email:string="";
  password:string="";

  cus:any[]=[];
  count:number=0;

  constructor(private router: Router,private http: HttpClient) { }
  ngOnInit():void{
   this. getAll();
  }

  getAll() {

    this.http.get("http://localhost:9992/customer/getAll")
    .subscribe((resultData: any)=>
    {
      let i:number =0;
      for(i=0;i<resultData.data.length;i++)
      {
        if(String(resultData.data[i].name)!="admin"){
          this.cus[this.count]=Object.assign({},resultData.data[i]);
          this.count++;
        }
          
      }
    });
    
  
  }
  public delete(demail:string) {
    
 
    let bodyData = {
      "email": demail
    };
    
    
      
        this.http.post("http://localhost:9992/remove",bodyData).subscribe((resultData: any) => {
        console.log(resultData);
 
        if (resultData.status)
        {
          
          alert("Customer Removed")
        }
        else
         {
          alert("Incorrect Customer detail")
          console.log("Errror login");
        }
      });
    }

}
