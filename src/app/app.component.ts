import {Component, OnInit} from '@angular/core';
import {User} from "./new-component/User.model";
import {NewServiceService} from "./new-service.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Shanto\'s First Project';
  user!:User;
  response: any;
  constructor(private svc:NewServiceService, private http:HttpClient) {
    this.user=new User();
    this.user.name= "Schrodinger\'s Cat";
    this.user.address="Gazipur, Dhaka";
    this.user.contact=["01853637400", "01914211414"];
    svc.printToConsole("Shanto's App!");
  }
  ngOnInit() {
    this.http.get("http://localhost:8080/users")
      .subscribe((response)=>{
        console.log(response);
        this.response=response;
      });
  }
}
