import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserServiceService } from '../user-service.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  users: User[];
  shopClientId: number;
  user: User;
  constructor(private userService: UserServiceService, private router: Router, private route: ActivatedRoute) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getUserList();
  }

    getUserList() {
      this.userService.findAll().subscribe(data => {
        this.users = data;
      });
    }


    showUserId(shopClientId: number){
    console.log('id' + shopClientId);
      this.router.navigate(['/userId/' + shopClientId]);
    }

  editUserId(shopClientId: number){
    console.log('id' + shopClientId);
    this.router.navigate(['/editId/' + shopClientId]);
  }
  addUser(){
    this.router.navigate(['adduser']);
  }
  cancelUser(shopClientId: number){
    this.router.navigate(['/deleteId/' + shopClientId]);
  }
}
