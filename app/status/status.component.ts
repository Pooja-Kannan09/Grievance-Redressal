import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  cid:string="";
  rc_complaint:string="";
  rc_solution:string="";

  status:any;

  constructor(private router: Router,private http: HttpClient) { }
  ngOnInit():void{
  }

  getStatus() {

    this.http.get("http://localhost:9992/user/getStatus")
    .subscribe((resultData: any)=>
    {
      /*let i:number =0;
      for(i=0;i<resultData.data.length;i++)
      {*/
          this.status=Object.assign({},resultData.data);
          console.log(this.status);
           
          
      //}
    });
    
  
    }
}
