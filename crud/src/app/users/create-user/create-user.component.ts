import { Component, OnInit } from '@angular/core';
import { ResquestCreate } from "../user.model";
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  request: ResquestCreate = {
    name: '',
    job: ''
  }

  response: ResquestCreate

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  save(){
    this.userService.createUsers(this.request).subscribe(res => {
      this.response = res;
    });
  }

}
