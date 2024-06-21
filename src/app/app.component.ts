import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee_crud';
  data: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/employee')
    .subscribe((response: any)=>{
      this.data = response;
      console.log(this.data);
    },error=>{
      console.error('Error:', error);
    });
  }

}
