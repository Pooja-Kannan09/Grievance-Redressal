import { Injectable } from '@angular/core';



import { HttpClientModule } from '@angular/common/http';
imports: [
HttpClientModule
]

@Injectable({
  providedIn: 'root'
})
export class EmailService {
}
