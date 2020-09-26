import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  user: User;
  users: any;
  shopClientId: number;

  constructor(private  service: UserServiceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const shopClientId = parseInt(this.route.snapshot.paramMap.get('shopClientId'));
    this.service.findById(shopClientId).subscribe(data => {
      this.user = data;
    }, error => console.log(error));


  }

  delUser(shopClient: number) {
    const resp = this.service.deleteById(shopClient);
    resp.subscribe((data) => this.user = data);
    this.usersList();
  }

    usersList(){
    this.router.navigate(['users']);
  }
}
