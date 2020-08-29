import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {User} from '../user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  shopClientId: number;
  constructor(private serviceUser: UserServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const shopClientId = parseInt(this.route.snapshot.paramMap.get('shopClientId'));
    this.serviceUser.findById(shopClientId).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  updateUser(){
    this.serviceUser.updateUser(this.user.userShopId, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      }, error => console.log(error));
  }

}
