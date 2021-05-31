import {Component, Input, OnInit} from '@angular/core';
import {User} from "./User.model";

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  user!: User;
  @Input("user")
  userObj!: User;
  constructor() {
  }

  ngOnInit(): void {
    this.user={
      name: this.userObj.name,
      address: this.userObj.address,
      contact: this.userObj.contact
    };
  }

}
