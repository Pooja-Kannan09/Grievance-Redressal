import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  
  email:string="";
  constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute){
    this.route.queryParams.subscribe((params:any)=>{
      this.email=params.data;
    })
  }

  call(){
    this.router.navigate(['/file-complaint'],{queryParams:{data:this.email}});
  }
  logout(){
    alert('Logged out');
    localStorage.clear();
    this.router.navigate(['mainhome']);
  }

}
