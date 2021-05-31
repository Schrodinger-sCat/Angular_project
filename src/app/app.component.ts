import { Component } from '@angular/core';
import {User} from "./new-component/User.model";
import {NewServiceService} from "./new-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shanto\'s First Project';
  user!:User;
  constructor(private svc:NewServiceService) {
    this.user=new User();
    this.user.name= "Schrodinger\'s Cat";
    this.user.address="Gazipur, Dhaka";
    this.user.contact=["01853637400", "01914211414"];
    svc.printToConsole("Shanto's App!");
  }
}
