import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { ResquestUpdate } from '../user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id: string;
  request: ResquestUpdate;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res =>{
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ''
      }
    })
  }

  update() {
    this.userService.updateUser(this.id, this.request).subscribe(res =>{
      alert(`Atualizado: Nome: ${res.name}, Job: ${res.job}`);
    });
  }

}
